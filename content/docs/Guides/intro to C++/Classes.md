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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2JUH4T%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCDbNbcaEcaOzrJcmKQcA2%2FQ4keHnsWbm%2BG%2BTeLDkf14AIgKVVMH5HnYcDQnP9xZJmjSBShygHqIfaXrLVZ6QuwzKEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE94GD9Zdomf7LTQSCrcA1wtkjH6RVvM%2FRvMSsh522%2FyPQ4P1m2c3UKQLm4yfuDt1WK34WQz3jXQs3NE64fov%2FWHrgJnhAkc805ugU5GAhXz8%2F9RWQEEpuCfCfmAmVHzrxLbeDBXzb4dAMP57syz3xNawxWj3vLVBqTGgoXhbKzOX4LryakZVv3VoJmUHmHX7EN6h40AZk6GFAQsgpw57mzBSOCmDx8iYu%2FdiPtFol93Ni1gmx5K4CgV%2FUhdjJDMkHDBcb9waWKjuaqgapPgkv1aK4mfi6Mzx5B2GiPlO%2BpwU8Rsxzmw533JbnTxFv27u7xq4RpVAZMck7N5rD2gE2WA0Q2uY0%2FSjpBVP4QKlKlGprSU6BJz5ZJsA0mel7tH63SQxuSqQheG8aSM3CKni9VLxXfnzSBqmiKbOg7126yrhIgaUuNPdUgJTcp%2F2NWFnVFk1ofBH9w3OZt0S%2BVt2nn%2FQAGWbPanYaKc6niKfQ5%2B%2FBNUGWEQZQ2VvcTuBPmL34klAmfRYUgZ4Pjre0aIe0vsRFYyst1CSKb8jX%2Bcbj0t3aP5ySQvB0LMGT2PUtwwoCgYw4nYxBvnFPQipc5zAJHS94VyalCdHl1HaelUnbKqJ59xrTuGHoMjIs0i52LUP0oxi6dAURqkg4pJMPf6lr0GOqUBdNnELN5v6kwu7DAtnrJGLTAMuukbF9NunXFoK3hxo2ewBZ6OkGwJ9VXf7QzLCkGIYYp6QVE9IQ6hkTQ7RzNKTeaHxPhRrfY0kHCzDFRS%2Boc1egrNgtyldZJgBZ2pZhmxF9JmFT9rA6fT2D2r%2BmbqMW38Zf2GjWRcQRQYIlQjhi5fAoTBsdKKVyHaPzjE31gXA4JDOdHF%2BmKzo%2Bhkp%2Bv1FRaHqNxI&X-Amz-Signature=a5cfe489a6869f0e8def355aea66ed41b09bc3b0eeb66bcfe3d33528c12b4781&X-Amz-SignedHeaders=host&x-id=GetObject)

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
