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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJIGGW4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEjXtwLP5g%2By9AS%2FTRnmgauiyG5Y3AS8ZePaiBQxrZRiAiEAzQNqYD1TUnxcc7ou%2BKRpBUHxJm5faKaCCvBPgtekimsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKV8ykqFAJgEvEgXxircAwTCJQKLTyAdBcuvQuAMeJNiq6gg0zVLQfzG00K%2BrAxPfqToWe9lxcUyM6k%2Fxyr%2FUj7ikzhVlQJxYvooccdUAT3nbsA54nZHYCb2rrSb5prK7cTUIXQVY3AENLwSM9sV4zWmjPTASf5EQU1drIc28AEM%2BG0JoeMaRXYyERz5j82h8uuzSjtCTKuAT0v7rPUBU8Sww7qPRg1WH2FyUezPcgWSU3pUl7QjfiUjpiXQLiT8sVNHE%2FdJoLFVBUDoqQtMRgm1kkDr7GcThtlU9BLtNoINC1koZe26ajlcqriAMz4y6OMaAACiEJqtgGqbiLdxa4CkRsZT2hq%2FQ2xBfzgBVlE4tCRzOn%2BwqQ92DWeGJ1z7YZFnAeVPMp3rP232T3kDqAmwNqsos98uE6GgkimC9QbOG5VLkXwcw1UkQjlHuMwaQdk%2BkzPJUcBXy0TV%2BPu29GQvArD9OHx2a%2Fr%2FHwy1G%2BhDElTJbT00D0hxEH7x1J1kIQJPh7wpGgc3WwX9%2BZetDWaM7gAq0TTnaQ3lKAzkH2xmYPmcfE3lLFSUiTXVKmUMn3oNvXUT51%2BDFn9Mi%2BDweketU%2BIHd7O5WPdt4qUt6ic38OjkINyM%2Fw%2FyR72%2Fc6Iu8pj8GACq51Qio0PfMPW0n78GOqUBCKTnBDoPepxt8Wton0mbMbbyIDS50TCb6sHwzc30VekaO%2B1m0cnoIfn21d9TsukGIJUUTHwqMIahnrg4VL5wObedUZSxhYCDsFgE7GUNdzlHRZQZrP2xyelnhZel%2Fkq5XJ%2BQ7zxodZkCQ24jCOzVsbOo7ShgPVx%2BmIVI1dzgImxFWxtkBjY5%2FcysMaIVgQ1rVqSephZ7l91ArDSM0ZfwgrYbaC0e&X-Amz-Signature=18600bbc30363ab816b0b70119468753eb76e85e7a888d65a04bd2cb3d650d70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
