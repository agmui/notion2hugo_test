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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNWE74F%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBOBV2KeSpN%2FtVvjZ8HDEqlJgFWx%2BnJiR50QxmqhsJE4AiBPokVegbLsrbFbfSw9miDA1bMmUxTGMG0xCAoasI6NFSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMQbPwopqKbbqM5yczKtwDy%2BvmY%2BmSMwYL%2FwB6cBm%2BGcanYpDMZkljA1ouTxm3qsS33atXtlE5R0n9GSfEuaYVSBIBa2j3yKnXR67SMvLMYoyxMuO9qIGzk%2Fp5CGN%2Bv9RC3Gc%2BUYN4OpQtM4B%2BJGHwKySt72qzgggvULRGbhMHGvL4wMql7YzNMzpaoSLebnzY8Rf2oVixsVfPlljCdnfKKfq5t2UqUDGeasVWTxZ9asK3yiMxEqUJ3lVQ%2Bu%2Bh3g1DTI5P8EIKu%2B4bfF4PfWmiiwDG8Fel%2Bj9OROHSi0KSa2VYsHDSh2qdNtJl559uYo2%2F1tTxVBPlGOaG8K8HwXVqjJQnjHUChcSz8Bai8J8MMfK3rvFjEd1hQQpgETYUoXU1LZ4VA6Jb3mnrjcm0%2F9sy0BgEN%2F6Y6Dx80M5AAltZBDLxd5R14A0izD5I05mBGKEpob18ErVzmj327e1qX4q2FycPmRTbpVIU8ZgzxPx1Gsfk3D%2BBbynG81FgmQsboHDE3G4drDE4qPKzTIH8Mhxu%2BCetbFYn0L%2BakweCNBlrO6%2BJjoPV7MhU5OHK22uTVtfVJhGv63o9qwHaxl1FRhmzgfPfMCEoLU%2F%2BB6hlTgVXGzPsGqsrKWXFiKwhQwHDcegfc93kLQGl9YcDEKQwncq1wgY6pgGN7fNMoFpXeYLAWuvjj3149puM5LBeGUQ%2Bt67RWba65Ay7BabPDNbUqtCCPelWZSO9kQ%2FXdAo5mICGqpJEtjqLZFTGqKLpXZTiyOuEgfy48OQX9ob7PK5lw1v1%2FE9p9RGQOxxlwh7XbjxeAPZa8K7uPvLJGlLXMxZv%2FCBH2AqCQRAKxSX0EXWOPG386utW64DHwrJkkZhHMcauwqioqKV5tMX8WJmP&X-Amz-Signature=ad0336f5519b54b20d98dbc37e2501f6cd139c28f0467693c09b3930bb448e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
