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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2MTGXL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzX20XwUbX7jwJ4gtVLsmr0KSoos0LEssDZKi%2F9IyQygIhAOvf3BYYkMM6kEkBbMY%2BzFoD92tkx0WqjU%2BQZ8jpit%2BuKv8DCCoQABoMNjM3NDIzMTgzODA1IgxweozPPOJNt5O1Ipgq3AO3RseIGUmRc4SiVJuvNMgNlLF349KArWttvQ5uFt39I9zzBBtG%2FUx%2Fuox5ehgl7dTq4R9y9OO3tWXnCpxXcfrQGUELf%2Ft28H9rnnRCSS1TH1bfoTJwx%2FvBhF820zYj9bW%2BbJQNK1xFuB94zFN%2FgndL0Ozk6gSogIv%2Ba0v9ZjEfjXjsP3NUMmaC5EHMcSgzBJwcRPYcbJuquN2FRKxuJ%2BbvtRfhmwfJquHj2c%2FgHJR%2B7aCC5LDQdQizcn%2BdWe2ohiunyvAiZpuoGpShdZkRjcf1jkUf5TviJPcV3%2FCg3Soke2DEAPXk77tosqyNJNoXjdYbMI8VS2ufz%2F3qUgIaaKVB2iv2vWYFG%2FjwMRrTo3NgbnfI%2BVtWEKhUhGbfyOjx9uGseSvHyicl4oGq82CXel2b9eixriqQYSFUm8HH2Z3AqZsR%2BvpCMsR%2FcsmvEoVmeJOMSJDTW1E7DQNAF7J5DtvxB4oQaEuiqjQgNRbjSwLzm2yWGaoZJ2Fv2LWa%2BzFPBK7%2BYIrU15vuV5V5l5FvTP4AytRJitDyVDJVhZocjSMdFriKIjWeDts30Hp9wuoa41X1Pcvz1435Cmy%2BPik7c%2Bde9bgwFvE3y4IMbztj9MPG%2FGGhLqSfZFkTK%2FvcFTDs5MO%2FBjqkATqdNam0x5V75754%2Fb6pGqgwpN%2BYc629b92UiPzoYEplPhypx6ckAtG%2BvOZ9EoW%2FyFrZ6lML6cslFbOHIm7l7usLJHuJ1iWPycrzlpUfA6OmJftW5Ec4SggJBA5XJ9fo3fOswBc6eEtn3eNAVxuo%2BihqdQ0vKwjyPs43M2WGQya%2BixOZzmEr6AHY8OAtu%2BBy9xSMVXtEHCgQVA1nrBbx3SiIwxRO&X-Amz-Signature=b602fc36e96a28c73bb023b8457b147e62b1bf5e85ff6ddf98498b1727797f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
