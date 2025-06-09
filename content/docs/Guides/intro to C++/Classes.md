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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MY457I%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE07VaSkFqpnQp10UcrKaItm8Axy2D58BOOBrkVefar9AiEAiKjLjfwEKnUogChWzPE%2Fl0SPWx3kfVaws836lqBG1i8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCQ9oevGB4j7S73LCrcA%2BYRyXrMq203MNj1CC9yFXhOXfDYjXB2Tk330bwZZRsHQb2PXp%2FfFddrCnr%2FNnYpZS%2BGUU7E%2Fc%2FwSuHWCBZ2SFmhZFMlPWkyVxCqPTuYXl%2BT8xeCgN3rKKGg7AOF3cndUWVNnZHCCQ6pKj%2Bs46a6cAwSp9AfgixZD5vvFDfEuK1MQqCO5S%2BrExdtoi%2FBHf3EJNjpQGw%2B5Yb931k%2FYj1OFqDkeeMHRp2OYgToykygkz86s0lpR3NeaQL%2BM%2BLKpQN%2BedB%2F%2BsZm2ewJ5JEeeXCdxAXE2TiRh35oBhP7qcWnm8MRRChAUJsKxK3xyo4zIX0mQoR4rFgw5YljN8RH7xfkuJbxg%2BZ8f9QFNliVbjXrAuvT1t9kBsnlBesZWXSxIV%2FlPPUOG0aGDxvpqj4ihraxK3Tmg4R3cwVsc2lzwcPwV0JGeUx01qS4040vfHfSxhF7Wv5HGdOGZ25ox3Lgi8w5e8WfA51FMqFER280j3pwum6cR59Rka%2Bu73s19QXU08WhX0nJRQ89zSQEJemjJH6l3mHg6bdwXafy2xR3z2ZNkaNX3sUFVgDL4nSLUhBks3qtdaQsL1udCKqT40gemGIMTXjXRkPWiPqP94e3muduPZemPUtoV3b%2FhEc97PMrMNTLmMIGOqUBPJOeAd5i6P1J1sndOsyLyrhSf8cmmGDA8VqfwMHyrT6eaSKKBS2F7myqbHGZpSB8L3q84R6GMq1VP7aYBVDqnk3CRdvNg4kLloM%2BGydi6igyS%2Fi744e%2FKOurZWClvY4asOQQ7bIXDYtvPpiUr8dE7E%2FS%2B68NQCx64N4CelPXvtKZHSkoV4QnY3gXJNi39i4nvY3%2ByZ1YKN%2FSKImojZy1HcQ0DJh6&X-Amz-Signature=bd2fdf24366e79432323db7e89a7819c180b9550268dca120097c1c4586e944c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
