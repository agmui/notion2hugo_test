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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOFOIPT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIF09b0VPHYCl684A488gUnzwvbpCffvidQBg3Q4rY6abAiEAlsUBBS4tlrQELF1yQp950RxMhr3hlY7jndlZO%2BnX0l8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE1ArGe2fLW6iGHj4SrcA3uB8A1DIrkp2phcMo5oRu0gPUveBmzsiJdeDiYn1Pdr18N05vjqnyYJqB51ii%2BNoUk1cn5q1QP1stwlhVqn4EB%2FMv9yZyClPHXgjunS6Omgid1UZhjcnLzkV%2F7H7rZc3dy31YPbNsVTFEw5B532bMh62C1f2saNtlrS0%2FInTWb21XXoj6U3n%2FrbNCJ8Viz32TFWmUT%2Bb8UzQA0OOB3gczdH0Olu9xQS%2BIPa4zT37SGw%2BWcneDkkbNdBe8N5yNBW6u3geYaAFh%2FU7cTklKR5qb2hDz9mm2RCYmJw9vBcQe7%2Fa%2Bzek2ylFhIhrCSKGdRn8O%2FaJGMD9UtPP02oWVN2WpDlb5SEHnALtE5TN5H18JITIGomQ5pv2g2s%2F1ZfUfBvzXvopr2wVea0rOqZ%2BAE0GY2bVue02TDO%2Fp7VYceTM%2BHe%2FZpl044EOHClTYKWrbzlgsBbJFsteAmiZHjXBeJuGDyPY7HmDpQLvqjrRld5C2poquUncfscrA%2BniSskwuzdnmhEc0yZIGJLc%2FlfrVCMdqtbCqiPcmhOFPkGtjWSkiBgjwWYD%2FPgnZ%2BTXxSUJ6kfiYdrYkn%2F2hOAn%2BsQg4tVneME23pRSjwq9VmcbUaLRIY1xrwxzLdTTuYevPxUMMmw574GOqUBoDuP%2F4SOhew6KC7jFC08rawdyaH6VJWNNDqa0OsuDn9VQtvaqcc7XOAgsNX6T6A5uPoa54TKHVKsu2Xlj69Xr1tN6GtmIOJ8UScrnBOXRe445ks9pLNgY56nC3AQIw%2BtBK93WPF0ZEUfO%2BAu22Veb4ULmgIMs8TIcZ%2FG4boHn6is2NwNf2Tt%2FjBohsUN2KO3gXLbPbluaydv8qBtXf%2FDToQLExGu&X-Amz-Signature=6f229163e5cc51c4593f807ba1056ccf3fb1c7c4ab990516e191ab3de6f59378&X-Amz-SignedHeaders=host&x-id=GetObject)

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
