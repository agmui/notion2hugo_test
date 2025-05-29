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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PFDRIXK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ9mBkrx1rsUb5UuZU05VQAJUOqcZpAB6EGBmOEknXyAIhAJbOmm1vscQJAcMzjJSCX7L9s0IRDzhaG0DzpUlqpzGjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ0N2H08yoDeCvqogq3AM5d21Zx5OlL3Tg1JdTpSVbAs6DXINswXq7iS8jTnyR%2F5HWl6Vpe85nF8PQniw5htV%2Fx6hERPC%2FZfQ67JdXZteoumZO0dile6A1C2fXuERAcxhHBNCJnnG4GclWnEa4CvK3%2BstXrKfhphipaSAGTLqxMlLyfkpgZThiErwqBpHdKz1hma11SHMWAilTv%2BhUN72YIAZMadJodW11hYwxbmHg3XozDwlOICD%2BPTEX5EsfQoKyHqIHXHFbM7UjMNI5W6ex3CQwzR2gcTjy%2BA5vjI0PLLMVEK%2FMAjbt74MSK8kAhoog6SYyd7ZS4LcYRCT07EmDnVrAdpLrzosk8dOWZb8VPQQFg3qPhDdgnb%2FJ0H7P96rfqVgobTm0fTiVfKfh00bkp8brK4oxskvf4ezaBsERp4LNVu2oPIUC6P25rrf3ZLNyL%2B9U15XiLLJs93YxTHM7q1qX1bTr1HP7TDaZtgc4GUL2qrMIN9pCuzBhGLdEv0GolTya0QZosG%2FX8WSK2%2FJowCNxAnY%2Fs%2FHoViNsQXaHUqB%2Bovf0OOj4M%2BCEzXODqgL%2B%2BxtWa5FaObFyDBUq4FhLTzVJJ0rOaRsG33u8G0k1zkAGwxCiTfu9Rx9OZiQXjdt0iOr7rxJ%2F3jre%2BTCFkePBBjqkAZ1CEtMlsWBWTYoXAfjYdxgI5hngXvC1et3nMaCws9f3isHDvmWlURs0p0ZmmVbuOWz0YScrQoFtInydPwWPXgAG6eegU5kuDej1Fadqw5g34zwAA%2BezVPA5vb4bI9bu5wCfTVcLr3lKs2GFyDRMjD47nr%2BeYv0maJb6JtxAG8Pm3AdVFZsvjJYItXLthcAP8N%2FBhVX8OUwHA8%2Flv8lKm60OxkfX&X-Amz-Signature=82ebb7e578b822d93c4bdb8d4c56c91dab1ff28e6b1f1d856d0586813db4dc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
