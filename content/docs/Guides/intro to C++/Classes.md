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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5TJ3DP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICH0QyDrX4WmGVJVjQro5DO4sjSvS9WV33GHKxQtll%2FoAiA7L0hf3Xmvue6ojJDecTpOcHn64KTYar01rh6t73fbbyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZ7nQkQI9%2B86ePVclKtwDSv87mjp8vtTSj4A9EpmfGdKV9x%2F2VBpdU%2BKZ16CGxFZ24TBSEjzZhivsUOitBvJ8jaoS3OwB7ye75xRA4F%2FG1rhdFCDj9Y7FaVACQAZk0yZxQi5zMRcGUa2RTLe7%2FG5WqEMmlJS4mXj3iW2K2Fsj%2ByvpGcZSkOl3uLGn5lcpzxXQVHLxQFH3%2BgptkSDY18JBHgtYd1a%2BR6p2jGRvBAeW6NsWS9J0%2BVZEA80PkLSa97Jm9877sOpfJPgrOAapgMaPLqPIx%2FLXPRlbEv7KMaHwh1KBceVy%2FeBRp6rtjXrKcneZc28vw5duSBAzRWVO6XlgJG5aTnTjaPjScoAMrq0WVfEgR6hE8ggh61PI7VMVj6CUJEppCyX%2F%2BSmIRrSZP7wvIeFkPqRp0CVyIQw4AisJ%2F1VBrVedbw56wkiMZILmX81ZwR7R3BUHHx4dnCIf2bSnhIzseVwE5wPCg35eW0hrZmIkO7o287u5nNtUtdFInz0Rdr5X7gi%2Bd%2FFYFzDPFauGsGB2byVXtF7iXvEK%2FhedhyHIif5YcXicBNZFXUYtLWblYKpqg4e9WBeW5ZLnW4C8QO1MGNX6Z%2Bn291gq6RgOL86JKXgKS95rHaRr2lZ4ixr%2BDZiwa2vDOxogBe8w3v3FvQY6pgHzd%2Fc1cISSkx%2B4UyBa9HAHOUPX3WdjxYVB1VpmKm9llnNaBsYuLXM6ZMINOqXqUJQYuCtWJtTSk%2BWt6gdDD5LFbNLZqa86mRUfLqwv%2BqA5UedDyrdykII1IWjbnu2j1f4z3U3iN1M0fAX3FSN5%2ByHeAWaeMZPqoLAvJsom8L3QPkSXF9RzlabByYmv%2FUJNcrGm9HVYT8jk7pQitsF%2FWmX3%2F%2Bw1m4zL&X-Amz-Signature=50fb105341911da17fd0627f0dc7989f7dcfdd26d50c1e73e4a18e17d5387826&X-Amz-SignedHeaders=host&x-id=GetObject)

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
