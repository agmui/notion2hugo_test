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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJDQJN3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN4HkjAh1bDwFIPCRACkQWzd1yRZuM1exDpNibppSVuAiA1DwhSHbDAd4WqHLRO%2B%2BdDm0uD%2B80JvTG60e38mtcwUSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMO%2F1VBczUSsrIfP%2F%2BKtwDhneGmIbyzkhL6MLz7T%2Bxqpw8HfmMsp8fBMvb8%2B9VvLIdX0VbMObWBrZR2Cg8RucX4YyV8hjotljcLWzVq%2FeYGU8nL%2FILRuqy0eDDaAvs0G64TSdDZt2cLJxK18DjmUxCcV%2FyLqeQw5o8DdY1PqMMrpyA4zxNgDAba3adKdwCmbzuFgUqAt7m3tXnhdyytL5z1pkru3a%2F1uA%2FCezUj2zbOFIyjIfEt5z9G5ryRx6kjFGDtH9NYVahS1D8I5tJxe6htKkhN7fzHVKtaBYECm07sM1sZkMgofuIMBo12QiPWl8jmifC5OzLx7iHEsd%2B%2BoRsMvjfN5s76Zuc3A4Ii8P%2BRZcvcQVgtPHrc6GL7U7s%2FNwgXyOBkaBb3jCZ4clpIshRtKvqYvDEkOgxridfx1nZPn3xn2XsPUH6REbrYO7eajh3pgbsXhARmtrYa%2FQwpzkqxrjf5igWfg%2FYB6xEjU3cAxytEm3g1kdwMvB7%2Be5J7tQ5HQebhwjXztgHZRl%2BjuboGxbcmQJSxzLVEgBAtDk8ojw6NyoMrE%2B994B9PJsOeIJj7ZE%2BM%2Fro6YOFgbF5FswB9BOW3bpcTsO%2BxnjjN2YwczGRTvH91weLyTLRsn4sGxW%2FCHrXjbtlHbo2PmMw29XzvQY6pgGU1kNZNIaSLmZP3534WyRzxIG0Qkdv%2B7SCuta6iAykBo6FbN8wmskh1QlSXpyGi0Vt93PEsqTEwiOx6zp2F0Y329FJanEdkKD7AIMuqCE31Ju%2Fzj8Avm74p%2B9aiUzl83VKdZi20HXXyx3zkzU7qNJo3mMAGNQoq13jOTbdEA%2B%2FP8ISXBQWG6lKC25CWSp3f%2F%2FXsEl0qL1OPvFA%2BYNyys7bG2Yre5KW&X-Amz-Signature=78e85ad6ca1d74239046b23c24ccbb3b76931fc2672d0ae64e7dbee983a463a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
