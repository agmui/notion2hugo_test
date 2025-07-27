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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOIAOT6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCsW5ndOO6PZxOLTmeJco1mR1rxr6GCnFRUPBmX%2FiCjrAIhAJYjSfnvXbUJCSCcRKq92JA6nV%2B68x86O5Q%2BmmTPdeHWKv8DCHgQABoMNjM3NDIzMTgzODA1Igz3Bjdk7NcPBKCjZbkq3APmF0EWMvLPEgjugNnlSz01D0%2Fyhds57Ag8HxfqVqxYB%2F9%2BIhfW5N4DwLClXKxvl98Bx7DfXaw2q9LYiFCWWJ64H%2FHVou3AYZgx8o4iFUnqjQ%2F0Fy4z3%2BlBNEicROOrPs7TjGKXmCIS6%2FQtzUtR19EE%2F2yzlyKyrbDw2P86PxWCBFwwUxpUFgTlL57HSPj7v8PIJzgS8qTqvHzu9JPzBwWv9dYbMIfJJeKumeZiiVYfmDrAKiDtcKiYOjRLHvIbwr9XeRSSXHF0wYtwgQV40p%2BI7nfogv3ce9F893HI8FZE9BEz7vQ9Rlzq6bKPoHYhpkg5aTLI9wXHOY9w7zSSeYnuoQ1E%2BaPBv7GbYQw0e%2FcgUuHTp%2BdewTFF5J2MAADFJAhGXppqa2cgsLg6IM13HQxGuxL5gCRi%2BZYLwlvtF0RBQBcpB4NoyQXjrQMHCXs5rkWUb3Jp2mm0mQFkFO%2Fq%2B3rH17glvqslEfdqosEOsIweNHN05LQtFYBe8lZXHAaMAb%2FMeuQUPeU3SKwXj18t%2BHFKJrQ8%2Bw0TifFIn83DW1COGspvN%2Bm5MxHdQDoA8cLWUxK%2BAHU8sDDdyuYVHwzFvQgC1ug1q3C2HH2aBT2LyF93hIRG6ofuH42z1UbiBjDogZnEBjqkAZG0q4C5Spa4LBgqKxj4eXxjXK3MTBwYYHN3EAUWs829Xdx0Ya7C4QmLitN7uujibrr0FruVay508wTTjzH0hbdvoyYktp2iXgrXNmOeUyQGmqaVWCiZpmmg3V4CIh9NnpYPENe8Uc2i3iKF04CsnUrKdSXkIE92AI7h6xjgYZatUKI6UrBjRCx7f4BeAWtbHC2F8lLBhNxE2d7b8OXmBcWWicXR&X-Amz-Signature=0db633ab3031eace4599b87aaa06b7340287250ccad44faa25f2306d63736916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
