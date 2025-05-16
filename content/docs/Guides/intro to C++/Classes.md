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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXPUYH6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL8rD0Gn9xytaweL%2BwTIQIEMTLE%2FScY179JDHvYAru7AiAdW0BqNqFfzwH0V6AANqeCf250Qj%2BbXxzNWtUgK%2Bd2Bir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMbXw4dfnWkegILDz6KtwDYm%2BQV5rSlVEZxPtGfG1JsXW2InxVBGBalq9oOiH2LB5bPtqhDJG9avLtIQ%2B2Aq39QCd%2BY65pqJGqYfoLQ38guRYIYnuwV32rwirW%2BpV41cTUTMu%2BX9n8yLY15D9cvo3YlVG2NQqmNcUhESIARtCqOFzOn%2BOYjJzATH8ztx5xhNVNdDFo7MORy%2BaiVrr92%2FbhqR5f9I%2FKasPxy2Z98qGGswIcclGhfb1RzHpuS18WXDrdotVV1UA4vTZh6YqEWs2svegZdgsGlINi2jTzZjCzRwyzuQEKV5efX8SsQaOw7jotze%2F6M98ptZGXzUEnQuqh5rszunuYhREFevL%2F4I7UJnA2OonlgjJBjIlgfaWxEpMdHqCjzVS4yWu%2BmhShjtV%2BHx7VPGaCj6iBnwIlVHD%2BM13zGpFk1%2FnlXPN4t4spOdknzVJ4H7L1McUm8OBV%2BsDwEFWvxcsesookhkyeQL7HHth6er9sCLBTqIbsi236IGSJfYQjE%2FKcmixDw8cId0C1GrkUYfsmFSlwH4mI3cTNukdt%2BzwK%2F6YnEEqSvkTiia40%2Fvd9tsZdY%2Bb4%2F28%2FL8ki0TcsRvqdhz1ChcUxZoCQYxJX8VAidM7PN1ehzV0%2BhwE0FOL3ZoMeSn%2BTGwAw5aecwQY6pgGUfVgXjL2MXzdzGm5R8j07QVEvBCHZ4yK3hQAo9JTOJd%2BXme7qe0wrF6iS34zZJBQQJS6nRA8fROXVlLlm%2FvQy9vG%2FXUz26gdNXbNux0q1WAw2qqCjZch%2FWArdrP%2BkoIOBdhF4lAiJ2pC%2BCVjl%2BszdVHpP4WZNzQyypIb44v9zK5EkARzS8w5bkOwtO3xs6jGskRq7vhz09tIexdw0ri7SW9WKIdAx&X-Amz-Signature=6a25d14586031063abcfb414375089f54b85d4b086f58e37126a9ce198866f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
