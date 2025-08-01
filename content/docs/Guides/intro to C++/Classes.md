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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YVDT4Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2R0ks15SJeSPqxDjbUtxPlrh7glyhtmW%2BQbD6QDyOmAiAJb60n4mcLpDviRYpwV6C%2FJnRquIsyae%2FXbVGcTHSpZyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfSeRpJsjRUIXQV3PKtwDg%2FGhdturIBCwWmqL1jL5UJnI9%2BgoW8HtcmlQ8PKTqS4i4pXM4a%2BYfrg9Dj0rYOR4AiD0NiChXfj3pqtLr%2F4kThlZpgMFHhdzUU%2F%2F16JIbwwVmanmL2Dyxg%2BqlNPTlKqjXTuReScqTTQDdimeKKnX1H1M6l0b3PV4DGA%2BvG84t3Mjwx2S3TuIKrN4VeppVhcB7kXl1NZeZUr5SQNqJvdZzRS6ievfm7A9gZ5JUghtTjAowvA%2BVArluJgGO3NgYv%2F4WviHcoQ78NsP6oG4zkuq1PsacNj9rgYd%2Ff9bB5cZrFTAdoBIxkVvMFPvYGLCvYnx1fzXI11PDjOP%2FkCziS1vfsvbDMwJDVG7nlK1PKo6AVbL%2BdKlqhfYoYoxnfcP8Ap%2Bl8%2FJtOK%2FHMSlHy3u%2FgFQ9naOsjYRlIHXskYr8g%2F1K6MjIiW%2BTkfr5F7kRB0LDwpRbeepd7Z2OVGqCeWT5ypwpkVQjcIPTaiAbgJ%2Bw70G2cLHuhHj7qqPtuek%2FV3X4b2MYOjgSxMoRC4msomQ7VwuqgRFJRouWNZjIpU%2B7VotIJnQsNjn6rJlDa04Tp%2FKThb%2FaLgyg81ZjpTGCa8TYSGaWFx4SlAr%2FpSbjpccT95IW8u8WUuKWSOdaauyNCIwquyxxAY6pgEnh0tKRuQGBPfzIErl%2BKi7pEuf5WURVb1hGmwAApt%2BJ5GrCFiS3dtsXxOOk4l9UzRv7yqI%2BjThGEu1v%2FcutEGy9Z0Eh7RJGfTQlnCMmXLUI3bn9XjxsneVhghpNFkdaYNvjYtsr1ISujqQ%2BfoFZy9HcQjWlhITQUSr3svu8B9X%2BsNzDpnUkH2Q4MpU2xy04OqlK6AxjoGo7Y8dlBjTkxLqIba7iNG7&X-Amz-Signature=a06461dbd2a48490cc6259224f260386155b0cd3ab55bce1771f389614248ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
