---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNVJWSN%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTelyGqpk6qZ4wGDJQyrxE1qFujZi%2B4lZXee6fRwCtMAiAl1KRlO2tbEJIgAR8ClI7yPKx9cvoOseJucm1h42f5lir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMU0ThuYSa4vJtlmZRKtwDhEsQWxLcRX5RzGLROvThRXa%2B9g8yYpBLui4Ppl2Uce8z3XIuOGeRh5lvCpTIAOS2uYoORVZzTBx3Z0FPoovgQwjqGrSkctEGBjclamcI22w4%2BYD6a5n7XhBqDqwvPoeMbF6iWR0kl%2FFqCkhfCiqbxTqo0EVgnxggy%2BVtv12IIjQPTZPoyUTHI4XXBq9opeb2gwEEyZGfYN5w0E0Rp%2FmHCJdjbK%2BOxDicKVooqo%2BHSUvr%2BjIy7s8E8RpH5CjG9rDL6Y2ldyfdQjudXkXI31y6Wr9USNcVZQCjI6P97vv2AjXos137g2ZmYtbhJ8LQRGbzFUjyESVCkW7%2B1f0bDNpv9sgrnfTKzCCaOpRBEl6ueeCHQPeZey9tDcKbkNxufWjWMCLdBARJBnAmrxLw6vOz242v3ytMTtM7eQZwNapixTUyWnzz%2F9QI7Fbc5QD7hZ%2BB%2BQeTQ7eR7vgbcmWhAlm3JPvaBJ6YRY2%2FKPkKPFoFrW71kXUsJnZNN50SZusLFeX2RBoWrd2xUrhHkEdnFyzv7xTBlUSMFm3z4J4VQzWnqzOzvKX%2FYPAGgOxbbiOpJ08zG71m7Uj%2BLMU6Gfr1CX8xMmI2EnRS7XjA3a6jub7ZwvddxAeU%2FPmfhrPYPJYwvfyPvwY6pgGQBfAXqWYif%2BBSGu4%2FXLDdu40utxZrjgVHExsrTP0F3sgs6d11Ud2te%2FRvMav%2BuZazpaEyxREsPVuiEqCyZ9RtFIsC%2FQmncja%2FM0tSHLktbi7dCgjVikGqTAwPp41KQrgV3ePewzMTWakguCenjwgEchPLatmKHAc2utaDzt2DRO3tUrl5pysQurRz4jALrvg9184Fy1BNk7Q%2FJc0cUZ1Na1Kbo8ka&X-Amz-Signature=f78758e5770dd65db314ff8875702c5ce2f7aea4d549fc12be91da4a8a4a774e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
