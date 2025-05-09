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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFLVWEI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsCYUei31QtFpArM6RMLqVhnP7kmn6xXOYwRWz9FtYQIgK1Gxc9RYA4v5luVFJAxJf5QKIdAbA3NthXMeskjk7fcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5oXttzeLCWmgC7IircAzdV%2FUOVJD9crbRnfkbTR9CLYOKppSokMj61Srjo1UmZG6RQHhN9V7dgit1XMCKla9od2rwx1UPdS5GYpby%2BUTtLjGZlmyDvSTRV1kVmo0rkPdM9JsHPjESPPuMkuztcZwXS1uLYY65hIaM8EaImB5PP%2FYzIVvRr%2FadDs%2B6RE02G6XVovZ3UmEY5TSkB8H2LhVuRDueuvfgpeScZckdEZ3z5f6ljLDwMLz%2BFVYmjHd8KkVi%2Fx%2BalIYRF%2FTCXTHcTX6m3jIz1UqKtF%2BaUQ%2FuPUM4%2FKa8fyVbg61%2Bkw4tPIBpkavErwxG3Y6g4dgvNdSMSojHmbZAGcG8lVSSvsRd0183SbhaAThRFyoAe6iJGFz6T8VQJakdn8qdpaYTVaB8bn3DeGs9Oe3uAOHW9wg24ZCu0eNX850VkWmA%2BLze%2BSJgNQeyyLox7IVfEuGa0gVV1N9UTOVYFF2xaGckTOf1xVeeT4k8Y%2Bht3aW2v0Egbose6AsjxCMDEjbKO%2B6KHHmmgSkI7HC82%2BECD74ZFhiiTMp4MuRPyB3fUaUoHc47ySdBq2GJnnN4oSYjHe4dVgxN%2B6lEp9dR%2BzYxSfJwxZcHRQ5IImdE7g2zwecYS7OJ8dC0JKbN7ad686lcODBJiMKGj%2BMAGOqUBUFQ1lNOQ3JN9EwW0uxebLC2%2B%2FNqHuciXa4lwqkMjYlr6YD8O0xQrudLz%2F8Nv9WzQUYgDyS6uz0Fu0f%2F%2BumT4YdOk8Q7mPpMFBhhuyY8kcIhwlL%2B9iks%2FVKmSqBlu0Ufzrp0e87moBpM1GuZ6LvoL%2FCsbCQaLbop2ptaJd9Py17pKqtblE1Eqhb9MMXnqKsIgiQgjVPB%2BaBNoVEvHJPQY6%2F2rce8j&X-Amz-Signature=6d6554190a533ec9301ea3961d2350dd1b2a4cfee9fb3ee81e02bc5f262ea343&X-Amz-SignedHeaders=host&x-id=GetObject)

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
