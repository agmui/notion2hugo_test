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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KMMBGC7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICwkarZVf68setIQlpXYXCo9dn91jlKFxJEIbln3bCWsAiAZ6qnKvbWGmrOExxrfEVMMjM8w49SwyDjQ7Z2CtKSFZCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZUkG4e1uzT2d80GqKtwDMFAW2FC18zod7xiGoiBTRxJdDaNhRa68XBBKVTiCazvSE%2BPI9FznTMKPW2lOIUMHsljfzvi35hyXxPBA8hnwiau%2FuuiYYNn%2F5zYs8blZOFTM5LLtIkQ%2BYM20dwBjE2BpAglIEj5fRrjbJ28D%2FSG5zAAPS01kzpUZSGWQm%2FMalzqpbgl%2Bhl2iOwa2x7HtDOs%2FJx3MUq7loQG2aiOV2F5%2Fe1jA3%2Fzq5GeT3zEipEGMu2NhB2xu8xSnvTFb2Dbdgat93io6MfpXj18SG0yCvX0RM1g28BWDjjhM5Rqoaae93jhkm5Y%2Bc%2B4hEXcmpk0s93rTFQDFVhj9mpbB%2BrOLYadzGNJy4gRKK4hsXV9V5HiPZKpJ9egWWZ83s9fDlLRquNtj4CRYjjLHq5hVRBQ83UE%2Fn2mvjfBgbdsRh4m5CzVdO%2FvG0CIzbU6yJVBqR4Ti99EQQp2v4hBd%2B%2FNneh%2BFF1xVaEZXJcQjiz1pOnWpYqOv9%2BTsl0Z2xyw4xW34ubVMy0O4HRHbgEv%2FSTfLWESx%2BaQWi5dFKbQ73yq6T2tZreGjZS8B3GU4kjio69gTD8DGwwU0KdmUA8%2FUcAekRjRspuDlrD9cUsfxdGvzSyYk6xDPnOjRppfGvXBwzkfnpvswxLDnvgY6pgEfVU%2Bay%2F616u7FuBtj2Qtriczxu%2FVk350wkJjbIZIoB81hqrpI8iDTTttLly8bQVMywu%2BLuMPfc9lrmL41u46wcVfRSNIohBskRsHbc7%2BJUS2qqXcWb8ydTq0RYOJo1Xf4maNnZZEuh%2By3fZNl05lJJ%2Bc%2BfQTHWADtETtBNCMlpe7vfF27Wsbb9H7hy3bl5ee29D5CaK1ysY3Ea6t%2B5%2FiPzSLLkIDr&X-Amz-Signature=227a3631e386608fae9bf48309d5123c794469db733adf0da666686adf40e30f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
