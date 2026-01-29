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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ADQPL32%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzh2l9KPaY1J6JIuMxP5L4t3%2FxYO3x4cdLsq%2Fk0%2F8RmgIgXPcRH6kGdHVj8aGbzWR1AfqQ0wKNkL%2FB%2FsxvxQXtKgIq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCPklfZamGui5vZo8ircA74KwPr7%2BRKD0c%2B4sI9BlkymWEVTZXuvUhXjAnOgkQwZzSKSOLCvAaLmXTmSdfLtWZD0tK2PHpwsoXlJQr9zdBGXfahgGZ%2FOE3q8uJDju0wR839%2F6iA7OXkPQpUC8nkbLlX6yc%2B4LMqzUU9ziJw%2FUW0Ht6rWM02rBkpeGaUYWhPSMQ8J3tujTSZhxkTVLX8P4k47cpSKUZd99gd7VE5tYMIwxHENN2LjRfu8h05MMRaE5ISJVIqxHzkfo8VEm%2Fvw217Ezp5iDHHxY7Yz1ErKr0JQD0EY8zV47wweHyZqASrbfHl5kAR0bpBhdiONRexH%2F%2B7ciLBBAMaywNwoOIY9GvC1WNM04NNiaz0dVyjlu6ctnPbvTHLFvMsfGr%2BuP6beYZb0z06BvgUu7Widn6lA2aTivZJFX%2BuOuoBi6i%2Ba4G%2BAble6XtVfq0AerrfwzG%2FK0Mu59oClMSi97kAw4w3ZKcNm3BBxs%2FNNJbRmdwlrCJEoIZGqMCUoY388tahrtDh5iWP8blcw7qBTQ%2Flm58w%2Ft0j7mgNuXZdyByoMYpUMsMNpXan%2BcW%2FPFab0htMqnJPHJ20MEkeWqcYit4NyErqPUi7TVrDm5RgZFzURkEX9l%2FT18%2BY5VN%2Bn7%2BCFMA7%2BMJf26ssGOqUBUcj4%2BH0v0Dh5pPVU0RLNjTSDJvzOD489yFaIqJHFZBZprKU1XKbwccSM2Bw%2B5aR5bBo66plMg5HjdAIMLAA4yPBmDOUX7EQPEvibs65U6vTVpq%2FvdM5xU9jvGerf1j%2Bdz%2FMIpbkUy%2B4%2FJZpyXOA%2FjXbVZMgphg1jMtviRirZ%2Bnx%2Fas5uRNP9pSGIsEJUpa7gQiULrGjhbU75boc8T3BkxTgv163O&X-Amz-Signature=fb151913120303c3774281c253d3562a6e6973fe35a42aed76c743d0f648f07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
