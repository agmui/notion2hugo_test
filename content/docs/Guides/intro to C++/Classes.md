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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K57TTRT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD1mR5cqjswuHQrNAhBqi%2FSy3rJEyR0wJiw%2FZeyEbXuHwIhAPvR%2B49hub7Wun5pZFehmM6aEhewbZQSngr6wsCXnRwBKv8DCFMQABoMNjM3NDIzMTgzODA1IgxBNQ2pcyPwZ3I5OZUq3ANH%2B2%2BlwZ2l5Uisj5sHS08ZZ%2FtOqzKjo1lvo2l3DBRmikYllNez4CLRscymB6%2BbbypRjn0UILj8bRDkLB20090WkX36wePyiAUI7F%2BE88a55NFnOz2p4Py3WYzSryqceN0epim%2Ff561mn0FK7luVAdOmEH%2FKfrn4kXxOEmRYx6zkk8oh1BZ2c7u7u18mCpY3jutnzQmd7YTpsa6K8UiGDvHweav8QaBQIFkCSLLMBe5DZ4tckSJx0WtSiY0JMtxLscczQX79Ryj62tnYcxVhLWfcift88G6YLz7fK5xXOr0aFWJvUrEYZyZOMgm3lkWYkbUkLGQorvvkCRBkp3DIy2Q49p0tsNk1OopSbOS5fm76TZoelLmjhXC6ENDRPNYAHM0kq0A1B6UQbbBYtVWaTMrP%2F0jlYieskjxjrrCxtkKnLNJEXVeyaVnDU0nmekKj71r8BE%2BDMlDFNVjBjjkYOLIgIN9gnQi1oecDvtkgQprhZFjpgG5qfXozYLdkYrKy8%2BdHWmWjF94Wi3R7y0PkV81e38sa8XFM4O5ggYLSplqsLUrhVqCJ4HEh0%2BFGkS2GnFf8mKw1Qd7DSGrwzMxEQ0WQs4GJ%2BBe0aWQjOY4Cvt4%2FiY2RcRzJDQjH9QwmTCMo%2FrEBjqkAUgE%2Blky6u9R66oY3X3cFBUewiOzwk%2B3JLP2yHklD4ZyiUEN9%2F7eoj5aPrggNOKqYwqDOZqAPmMfSWPu%2F%2FCHUQS%2BZjc8o94BkO7JX%2Fr59fHYi2R3s3Ky2MADa9yE8RlAY93XHFp%2B7%2FmqWcdCz6SVPiuhVpx1KTEHU9e3DhvCwm94yMZIDWESKxpFTO7MmV3ltCTl1OAlmLMne%2FVnZJa34rpjnjY4&X-Amz-Signature=8891c38939cb7134fd638a462c77ea5f40cfa59455632a5cbbd8758a564a70b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
