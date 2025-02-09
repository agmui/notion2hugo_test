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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RJBTF6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1uAQMkPbywClD4ykkW39Eap%2F095k%2FjTFBZQtITtkwrAIgcRR7d%2FC6Bka0lEpRAldSYNSxkMQA%2FJiLk0I3vpsCBSQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFyptpp5uyU%2F43%2FRSrcAxG518E8wj8kdwq0YRjCekJR3v%2BYRfld4y7PSxKYgltxsdNXkHJp55dEbQVoRfL8%2BIHiGqPixs5RI6BLhADXZ6ozvKM7i5UJUqQkrWKrfyRlNTj6zSCa5xpKNJ%2FArKF5fkKq455R3vTI0cwiR6BICZJqJVW2KGPSghGM553sr%2BuF7eMZE846kAJ4eo2V3BjveixfuQd8DqCCFNU%2BHMvhxTxDTSBRgIdehFluUznYTkJlYlOuu52IWhZYg9IU4L48U17NuPZlBdTRzSz4ox7AaRgJJk9LvImm4LgV2NQLIKhwpHbSPhhYn6XZrnnoLlk5kylfdz8hm0q5L%2F%2Bb4Fxlv3tfMtx1uvqiU%2B8ihSGWk3su9FeN1LSe4kT%2Ba%2B6S3EAUIJB%2BI4TA8U4%2BL7KIqU39HK0GyuAh5E5dw3F7wSIRZbf0ZtkG1%2Bivym1EugcOzfvdZj2QdwfZrC%2FIJqbKYMv7RE2gqSTp7uIYNPtailPXpaSfecVzfzSKe0EZbRIr%2BADkb1egEiNFLtRVcjaUQFs89iB2EfLsvm%2BXw4jEY8%2Fcta7S3qkgyrzxAqTSLOvc8nZrB6mupx0YTu%2FoB7cCItE6WXlilixYNKE2ugdoYfdEe3jixZyjG%2FQEOOjgQB8IMMu%2BoL0GOqUBwrxJtkHomaFGXo4XNgoxI0B25lr9%2BWKc8x8MwfJp1dc%2BlPLEZJTLXi3j8Soje668iE1virQBkHJVhDHyFaHJ3qsim%2Fkgu3CzTnKExAqZOtYnPryk2zBTkJbnxwzn0DS1bRnnEt34I0RKujJQAZuRNUfCqw2PwCj7cDs9Uw8yiYRKeKUrONyTmBpQkfE8WG0bbCFALaaReUEhhxlXdOZvHzF%2FXctT&X-Amz-Signature=e14af6c5b26eac99cfe6a2de51b89b424ef55d4c9e5bfa555b4aeaf36c168f11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
