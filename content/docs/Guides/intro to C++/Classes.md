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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUK4SRK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLzWQMs5ybnkV9rL8WHlCCL87eYdVG4I4affUnzBC69AiEAi9QW5qWHiolt96SyEzdGS7nXze65XoEhNsTgtbe5E1IqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe4FYYCAmPfME1k3SrcA0nbVBBPzfUPeiqpDvkN7KWPWOhejMTWFWSD4iBmY4m9ZSOiUXZ6za78SronjjWbvZVDDJd%2BCK2UB4cpmjFXqCPIreNNodPbC5IgxLzdI0YDiwVyWwgf3utKxVvg6Nbb34J5Dj%2Bwzngh%2BdbV1NIFtBp8%2BxYGxoZhN1diVo1aT8hQJ3%2FklxL7%2FpTrH9%2FE2YtrwSGNG2m84tIohBAisFLVi9NlUVbW55L5X1eXIEzzwXRoO5CCFGR17zfQuiCQZPczxpqeDW2bliu%2FX4YGEJ4f%2FYusfKUMHEkgyucS8XMb%2BnD826OKpaTzHDowj%2BXjrjezojVYtcX0ZkBbX6omEwW%2BPagzBZiiGqKeDyhtvujlgO2TYvhqOj2ORAVepwB9yAS9s28rJuiopJyXC4wXcS6CcikYRd2BUqmzMBntlqRM5iaImDwQeIAux5RZ5UnENTBg0Pp%2FPpvtUa5sRtoL74bjjUHfZg4xFNtgPkcGACSATiJcPQTCIUQ0h%2FBGSRw7tov3ha4dD%2B%2FrI9EslJXXviHtAjnq0RUrd2bYsjY22Rqh6uGR52UwYXETe9PT%2FOWmyL6eQnN8JP1Y4QEGpAH4c3n0vKEqlBE9erDXsVl%2FjC1FFBNO0RUuWxDc4mXptJbCMNKy4cEGOqUBYgWbFaD15LXuLmyVcVF3%2Bv0DiWpKyrS2P8s%2BXfjg1qQfLVC7PbUmcm9vcdHTyU%2BnMfAOkJQoVvn9y04hzciu0A4NJ%2Bks7NAakkQuhAu3VmdXicku4R42gX4m8%2FS9bAzK0KUXqrX8NZxFRxxmYP41IjB%2Bq86B9KMOtje1otOQfU0bExY5tkGRo8I4ltxHTl9595H3nNVFOgnRpS%2B1BpC5ONpg6XZv&X-Amz-Signature=f421df3c29d08efd6d2d0670324b57de28ffc58f7bef8093e163bc878a0f79ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
