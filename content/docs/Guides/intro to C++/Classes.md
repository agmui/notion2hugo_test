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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAR22PBR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCL6vEyG19p79McYg7ZZy5kdPEIJWLy%2FkxB3sPkIhUSJAIgUpNLUJLYA3K9nddvj0d%2FY8iEPEBd2IzQliD2%2B3AXYpQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm%2BHRO%2BTAYQ6%2FMp0yrcA8nwt5TFq4VSa6A08ySdP2Ox8uSwT5MJ%2FmBrRoV0s0lZ86jambBdG3rqDRY1cpoDD59lR9B2Kr4eN2i1SJEvRdClb0VQMzvc2pOxxmBlldnVuLxlZE9tay9WbdPezBZAgfUcVgKm392d%2Bdp2H%2Feg%2B46vQqCPJZSluQl8DS5W1mzPkl%2FyM6WpqA4c5GeWedpT6esi0ZKRkuEkMVcYwodhq3VMjJIdN9vlYCQ3bYPDbYOAcoVy7vrAMe1THN7CsAzTn%2FLc8RzoJuwwETdMi8UzLbJ44Ts6GIVScffX%2F3mq4VgTlPVmLIZJTyxia6opGoArLI%2BqhvaH%2FabHsSNO6NsXkJmzb5cVQtRvoQtHXja8p3P7IwH%2FUTQbEfdsuWoRlt%2F3TPxJMS8ruEUjgDPiYOxSJqMs0IfOfpun8p3nmvWLfG3Vd6TrnxD%2Fxn7hd6dVJdc%2BrGj3pfmKp6v9Ebu1CU11pN%2FeBL9cTn3ApmlwVpmICTlBWOOMiVRiCwK2oJiZJRMesii2rWhuMg0kG1sPVO7Istcyi1uC0m%2BW62yacdTbUDWdKCNvnEtrhiqRU%2BrjwsXNHtg2dPryJudNDUaUAGInJQhEvFrizJxGooj0XbM2YhYdtz3n6ZU858W3I0gLMPyN7b8GOqUBMJ5r231%2F9oNmRkqVPjotHdT9hJH%2BrxlskWl318LKLrf%2Fk7dIcJnpk2IQW9igYRRCLgS8oaW66u9HUSUsvHe4gXLSyhR1FV3ThkC9gThlx6Vps9UlsMmgy16ZjcGs9Sxj81qZTk5k9VbehYp9Q9jPw%2BCuSCdZ%2B%2BKafRyFtvsFlopn7e3YnzjyCMNIc334a2dvkLWDJQITTPD%2Bhlh%2FZQ%2FoZbZzLaQq&X-Amz-Signature=5a31356dec2c6ad534566ada34a7e9ddd7756b88264ed7977a5cd8fc4ecd9237&X-Amz-SignedHeaders=host&x-id=GetObject)

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
