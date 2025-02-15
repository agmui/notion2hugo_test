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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXWJPM2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT%2BvY6IKZuLQYO8qhtxQx53xyMWI%2F%2FMe76K7ydBHti3QIgW5MIDTHxWe5vyNPpCoNLCTYE4p66ioXYliLPMXfQHN8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFFdoBs0SZZ2n3oXmCrcA4Gxz6r3rdgeStSjF0mhMJiSk8Kzw17GObpUfAsOJGoHH4J%2Fts4VbFyW2WgKElNTHsaRoECPr7P6aS1yChBLNHoJQcBu1niKWFscQhg%2FS2kz1soTRnXk4DmMyveTfX3ljVZ59tSA4Xmi5LWH8EXpyEoZ2rAkJhBG6EXf8GWzgNTSTP3kBuZP8X5ClZFPB4bMPmHSuNq8q0K1prgeQ3EpsV1v7yvFqKxZMPS89ooOtuLyf8yJ4%2BeCfaFd1Ybp4VUHpCgfVgpyS6eW6BYaWc2UXWTHGHiMrwAgIp7cV6jGkFhBacCL1gAxfLn5ZvMfCSBLPP57RZhZF9IHQfT4oM436Uqwnm2KQH8XqE0IAkuH2Ev%2BL3qkgLKcl5siSlW9XiZaBoBD9JsZgWjMGMV5KmiyR8SJ075BKJJ3mGlJNAR5SkR7XwKQNABUJOkvTugiAAb9H572%2FxmQ404%2B0aKuk%2Bs%2BcfTUc9d5ItqaRdSEQAiL8BJTzoTn6d%2F%2FXpl42Zl2ehBxy6QAUGk9K8sbiMavo3SFwGj%2FqB3cnGfRUiOylThW791xL7SGWkwFN9VeSLglhoQFLHjg62emydmwr7S6QDHbRtBLWrTQPugk0fJNRDrx%2BmxQXrz7OerRnj523YfsMO%2FFwr0GOqUB%2FqfmkIW5zkxk3e3P27S6IMnLy0vDUsUCgiHs2ZaQ4Rx5sD52awAM7z%2FxgNJt7bQ%2Bxkzi2KZmSOubM1B4wiBTM%2BDyRqUo8hrpo3MHigntjpXaghZPMfddlmW6hkKzHRC8YLdAUrTEBCtdx09lVEI8NzDKn77o0qT8NPrkoh94UvioXu%2Ffpa%2FQM8a8D%2Fgo%2F%2FdMMMAEVHVpzXtkDMjt4Dg5EjkRyPbD&X-Amz-Signature=11d668aa030a9106b4136b3a9206d15750904422b08317ed6d03506be24e6f84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
