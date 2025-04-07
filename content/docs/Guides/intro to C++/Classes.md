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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3JO4V3L%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8sz40BA3kR9u0eljHwMUBCbiF5K9wdeMX2Yru9KuFIwIhAOMLJhAfxAaurQtR%2B4eyWPyk5jDYT2cpO94ACAyyrsbOKv8DCFEQABoMNjM3NDIzMTgzODA1Igzy045mZgKYsTMJdTQq3APSEHAEG9%2BTLdPBPgmLTTIGKl4A2SYqGM4Cyc5AUOoe3bwO6wxY%2BwaWC4YkbmQU5YT9udROFV9lycLi7zZnLBOtRnme0NyYvsbu4Frs16rh0x9mCK3S%2FrsFEGR5X61PYi%2FCOxOf7pg58X5YQ77UtuAZoel3Nyjr9vX7NtzX3DSP600SePH%2BOJaLF6PkD879QXe5fzTOYa8lIiONXf6TcoCGujTUl5AFhL2KsaYrsBSoHMi3k6NGDxMiSOhVCd9e20SZ4AOeGSHbT4AJgEOAkkzk2lnbYeW8rYAeCifFa3LoHXoeJzl2hZx40Z8uVminKBxnSqjagZ6HIxUUHWvK%2BoxUyNfp5vWtFYuArqcTbJ14g6bzHgluTLpwWA1J0SCQv7pxxMi9IILGAjMsN%2BBC6FKSVEkWC4TzVLdJxyJISOwwODsomUw5diW9qlLI9b8QB3F%2FJmSAiIKls1RZfw%2FozJyiD7s7MrQtIijpXrHxbPCLRs9iOHOFf5zscz8k%2FcrtI2TKl4pRvkgshbKntxPOXddrv9Cg8ACo4m1o1XFvtV3zEk4UxvKKpoVTpmPqcXjtCid9BftDpw%2B6G6Zo6Rj8HRqj2XrTcAInVmrBwxyJ%2Fkkq%2BCElui11%2B98aon1L%2BDCvtcy%2FBjqkAU9vIRXUEGvJnDBcxeCVAI8LqUzNuL6B0O%2F0QzX9dpSy9CkiMqmBdbskMVF%2BrmxVJG19Pa7Ht6%2BFQ%2BlLcRvIut6tgULDS5R9TZdjdE7F7ycFpom2gNLWRQGd3C08nptEoXacEc8hTnjX%2BsdxmJhXYuLa5%2BUIwlYa83as1WGgrEH%2BxO3DY%2BfNv%2FpyNcJOGMc3J7CQ8BtSDh1gUgd69ZHVIKG1umHv&X-Amz-Signature=ba39cc96131d739bd65468937d5613449c7ecb00e7468af43e49d0ada6866a48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
