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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KIBIAB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHPai%2B6Tz%2BVMe7LHWvAFFBgrxCLkBmcbCkHSjz0FFrdfAiBgBQ1MP3kQ2lAU%2BzoZp%2BbTDKDDJdx2zpJ7g%2Ba8VLMVyyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMlNnXf4MlEzer%2F9mLKtwDY0StnD4JxmW9ERuGhjJ2Fu89y%2Bvpp5KPB8BR3fmc3HWw4%2BfipF63SOIhkE1%2FwXYjaCyCYhxLo6Gy1cSfoqeXQ1SmFftNrqqTB68LfJJ5wXI60mT88oPA6lgurbH3DbRu%2F%2FGgPptPhPuDs49H3K1o0jh33J9kCZkMmGkect5IzEc1zpalyAn4yjhJo7QyEsJUZpGmKiUEdQOliU3jwPQs8iPH0Etp9ndXutymVy%2BeuFsrKWRD4wWZ4%2FnvVpZRsl%2BJAHHVW7wnvcHB0ahW%2BoWIcdMp%2FE3sMsQ1kYRUi8YO%2ByGDe2RZxRgBNHQvuwGR%2BlA9ewEs04NQRRHmG5Ew46wRWSn0rYaA56FL41yuFoKoC8F9cmLDyv69wFSPgrQdnTWkaz6Znt3yR0EL%2Fk%2BPIhKUEqRqtnA2mtD9zZfX5AIEJWmW%2BY%2BEJ490uW%2Faap%2BWZkbPfb%2Fbl87Hpqi78RxIBmy4zk1bWsulrg1bXAkiOxEiNMXoJ4iRCJKmztVRxtum0%2BNx38PSxqCblWl%2F6MV7QlhzhLMOIwk36bJ%2FX1fxvknK2Mjvme%2BU0g8HIGtFhaQft4QoyoO4tkufBOgflxwMrl6mv9RLVPcWUL7gKr7xtfGiPo%2B9pBArcpZEP6iCaewwvLecwwY6pgGJUlRfjuzzjB7%2BiVQa8Al1NwicOU%2FWLtcFlk74wQ8vexOPqbKt86gtFvWbTghnKdQfp6USYPgHKnvI4AY4siA%2FI3ZynGZHAhzgWqUnEsUbUoPreYTm14JXXWaBhmmRFaKEv9GjUSnuKxupLgrtk54lhOSo2x08okPuf5DUZGW90Djpa3%2BqAML3Aa2wWsvD7puHQ9eWZotKjpppWd9QMUDM5dXyxNH1&X-Amz-Signature=6d3e422158d58309fe96c791eee173eb7b4d2e2cf839924562c2a7ff3cd74a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
