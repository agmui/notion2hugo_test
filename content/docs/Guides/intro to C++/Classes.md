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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGVQN35%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTHssw4vsH5iabew4nNqP6D%2FoZK9aBIaHFJ9oTxxPwtwIgBSu0CrE0av%2B1V7VJgQ8Y6QWbXwui4XcAtpbAqkFqhyUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAIavUKGEc12YAOThCrcA337qcPBHbyq2xxzdUYQ5oHZ3oLcGoV2ZcxvugbBiqY8%2BmMGNjBf69WAZIaP4I3LHKMibhffJjO0Aj4IjD8gTlolVFYAMNnx26GvmXHVQJFyRmkAHA%2BoIHwjchZ1joZBv4bh5%2B6kHiBvfuevqFqs1dy3%2BeUlimcSVEcm%2FRuiZ%2B2EhM35l8w%2BmO0sh0RFz4zx9XMJI4ZQArfW0c%2FCVvwM68GV9CK5NSVg4bVBGynj5jOqNwI%2FO4CP439qhCmiGWrCSQArSzF2E6%2BUh39Z9qIRieWWUw%2Fwvoh%2FgXPEsWhUg5PRtMDcQuJ1w%2Fk%2BeEbMc4%2Bg6ERpBPFLt%2FJkT33gP2ijjhTUTGZpmL1cZPPgKPFpACs24QrUM2wxV%2B9L6zXlWr4bEl5kf%2FizWXNhDn45FhnSc5rZO1E14A00EfeSlv%2BkaMiSgvr09YNUE5i2QtsHNVd64JZl0%2B1v485BeqcQyXT5lUqYkCtthIw47eEZT2Ps4yogHim9JQ1BcK8uc8w3Zhmm7FkAz3V%2F8fOeOgwjeSvZTqpaz9rEqg%2BcIzqYwzwmxiZity87%2FaQ2YHAgUWj5As%2BT1%2F6n76rHSQObgDdtsl0di9O%2Bs1NL6Ew8qAdfT4X3lD1qjBDDo6X%2B4fwP7%2B%2BtMIjKgsoGOqUBymb6i25xf7FK7H5w0IlE183nbTs%2BAUFHQnL8DkeCTP1d5U80Yvc6HnkpTT%2FM0O%2F%2F0FPprkwRqXmu%2FiuRAqE0KzASfaYtQXZq1vXn53eCYXv7DddXXgdptPpAsGJLIfLcKE%2BcqbQ5DKSJaTCll3cR9eWazRr%2FuaNIZzsvWRYQescVQBkyncbyp5ohJHbRdMK%2FPRHBt8YtK%2FNUoTG340u%2Fh5VIUDBA&X-Amz-Signature=b01d190976b2941d8e0f0f974286b5ed949ae146aeb30de16b00831a2556918d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
