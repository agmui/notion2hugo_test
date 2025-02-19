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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNNCQAR4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAOqnS%2FK%2BBRH4xZQhLykDctXVLopNH%2BN7hce2RsMIchqAiBtxuim8VpFKXwEIMOMtJwrYYt4qJ20A8QGjXSYQSFH5SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME%2BK42u9T1%2BYkYpm1KtwDGxIjiCopw6zACGTTavQ6Hv0OJ6RMkixFE2DhnvCPlQ8v8%2BJVq6Cc00Ap0wK3XMuqSx%2Bj8BrA6RL%2B%2BFONThZ1YPd7uyVKl4H3zS4UemVlVK4LMdEojXOYrf%2BLwPdbmWb4%2FwATRPzD1VwQ5FJ3djJBpYs%2BsjVbTn%2BSZiG%2FkIhnoOqYHTBpYiXbLmkjkO%2F4E9Qq4WLRqRp0iU8eWgUdBdiIbTIzSVyRX%2F7%2BVkQAZNLmNRQuEhDeRctul%2FyCm9RQ1Eh3wa4CbN%2FH3KXLs7jNIULNzfwEnuRShsaJkDvEUj6aUgt1YWU3VxYKdFbxaMCRB9ogV4xYIp%2BdkFlcF7OwcSl%2Fj3G3jvq%2Bk3aGjTvcn3q6K9CHwC7X7ac9WwuVIj2x4M9ZB6dztjNx881npvz29AfR5TUUB1hBJYDHh%2F9FDxMkMV2N002qgZ0kxX0tmKvWPI6Ymc5Sl7leFZTG4EDPkM%2BmmJokahqBUDddj%2Fbvjl6Py2t5k2uxFK5YR1CL9qC6nEvPbfT5Fvx3Uf9p25GnM8uLOkTnUrVyJInzB4m6J8GokqCsjA9vfXJ67YDqVOlTYfGYY2LaIsElzMMNFxQYttpPrpWI%2F6vIEWTN4uUYbYVDhcErIlXR65tKnR8LpXYwn83UvQY6pgHSfXx%2BCS7tpsDvwu07kB4Y6V2TIZufFBW8DI9T78OREpWLlr6O2cINeKJJ5iCw7TtcsrP38fAfotxdc478gEObeTT81FqGEkIKUazDfIeyOQCzVmS0wC2SH%2Fp4aKvP%2BbiigOvWFOmEXJIRnCrhNnmMRSXujuFyGitvXrNhrqyX3AE3YqfsFcFlZlAUOHTgk6tc1W2t6bD9V3JmgTzhz1pRtPzBgfoN&X-Amz-Signature=f03013ff047be1d4b889fb7b9c039e301a52ff20c6684503345dd2afdd6ea10e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
