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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF2MBUJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp5D9f9cqnxpzZvF7tN6XSyIj8TCIk6yB2Vt0eI97UhAiAHCDkPZVmevBRtVfrP1f3VpAGjJIto0oug7gZ8H8twbSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMolLmkdSVh55Gio1DKtwDw19puUkVvoXlI9kkG2BUOO%2F20ITolzOJkSrYoLFe64uWtt9K2oYp20eEmkaBs8693vBykT4E4bBxlpPt6Y2oCyzYI6QHa31zIGDNxaJPmI1TSI%2BBmaVn7nLO9Pq6M0Z4SAGnGfulf5x8nnQUS87pV4Kk%2F5jGdOtDtOXca3CPrXbYSR570oITo3bTLf3O7jPv2wil9CWdMcm4kSJbw14ZeBMAIQz1sYuc37o7um8dMzgpN1JrUPdY5oB6LMvU%2FSJudCi5MzGLqVLs8XqtXKWfZPYp%2B5HHrmUgs40KnRhbA%2FeaIaeWQJ8ag6Vuhr1UY4Y7xS%2BjA30%2FMBwum2j31ZlckyRl4ozaUcPvCHtE6z7IuuphWwkKXnRfxiSQIdbFtXfzcsg6zhN%2FoDh4oRkiKguYnKCm0QpHPFYi76botFIM4pzQWDthVWuHcXjfuTZa9sFtyg%2FpEb8EybOhwPhKCHCqCTCITIyQnJs%2BT6iZ52%2B6InnmWCxfP8pWjPe5sLg%2FqI4ovuGlzga7fuY1Gam6DvKUQvYHbXuo9QiP6b02QqGP67aAws8ioHL68%2Bp2WgkVRPK4IIhhyxnrP5pL4Sh5oTjvK0KN5St1xm6iatEHSJOOTv0NliWkyZpu%2B6nXoZswzNTWwQY6pgH3Jjfof9jf55U6O4UaeHP3aiyChgI9f%2Bi0F4hHi5suXzcF3slagxsUjj6ZfotFklYyGX6CxwLNOF2y4L%2BsFzjK92xbGo%2BQGI3HkaVKpsR%2Bco36hbXq%2FFE8Xa2JQLwYKFa7g7OhQfEqL7nYiDDe%2Bk8rqlGUXMcMVlMr9IxyaGO0ElqjDls9vbuLKgKDxcZdLh5ETADJYkFf5bZbFyUH2DjjlhlbENL%2B&X-Amz-Signature=730d070be4a53f3ca2d214c3db3bfd82cb0fb5aee12c3d9eadd3fa976f52e6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
