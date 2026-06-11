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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GTJBLT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDmi3ZUf%2B0TegqAg5SUcS0%2F0DnLni0Tn%2FZRp%2FgQeBkdmwIgdUG8cSgZMj9H7pz7CwUWYt77FKPjWk1FQy%2BVpfveC8gqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZrXZG8WfDPQzMc%2FyrcA2w3uGM93yLFUfaULlLd6m17aqK0x2a0zKi5gn0qZtFVjvbOuu%2FrDP4zkkqZAhBXevslMPV2RoGo6qjOv%2BKCUgiZLFM13Q6JtNENErgziyZyPg0ixZyB2ae2xC3fs00UM0altgQ%2FGV70I1HTP0xPQ6r1X3wW0SqCZN%2FRyEoBN%2Bc9%2BT3HLmX0DilS1YSXVTb5tIYeBZjXmUcwiMmmJD8mhDCZejVU56uHjGBqSne7KtBV%2BGt918vRCeiEuqPVDIsf%2FDusEOiYRj6sgSavDe7IhqwL5Lf%2B0aR%2ByGUBNZ%2FNjN%2BiSQR8jmlwzWE8ZSnwhNDBhYoWI7tiw4A04uhFp0VgXeeIF86NBeOXnXTkJMmEPd7jaY37oaAfnw3Clp4nsvsIOaXH%2Fev0a96qiRDTMFZZtcZ73zyfvvs7Qa%2BlypULpmvcec8bb%2F5CRN%2F5MGUuN4NjiauiqK4StCb45NaBnuxpa6t9ZQqZlT3%2FxX%2BjYEeOnQTolfAdscI17S7T9moNykDvkcShlvHM3yi8oMQX4DEorTygGLYOeNCAd6uWuCLz%2F9zqhDRlf%2BaKTiEAo%2Fxp3qLZ7pnrmxOYfQZvuPMXeDJCJDMiUUYJy7h0QyM5doiMgZnrWE%2F4kOlEIvDYehkvMLamqNEGOqUBtB98v2%2FHlb%2F0rl3Ct6sn6tEXiCwV3wHyIqZP8EbBMVmmRcZi%2FlRgWQopqxRHJFeAKnFVAW4tTBa4RP8Vm5adwzvV8X0htmP%2Bt30p9UCwyuUbHLXj1bkZr5%2FH3Zu89fGmWtDPGyRHGwuWqBOODKk%2FjtjyxNzNIsuB%2B6BQbUKJ3y806DDTT2riaO6uQKHBrU2Q8%2F3YmtMsx1nnYf5wemrBMxYlBzy%2F&X-Amz-Signature=3a3c003c0f832d3957e0fc81d666decbccceddc9f65f4b764b0c8c348b154311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
