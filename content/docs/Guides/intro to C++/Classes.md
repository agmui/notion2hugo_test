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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXJZJQCM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDNiPMrzPMFOjGRBQXGgZQF1zonqNEfZtUQhl7ClI2j%2FwIhAO5%2BImhJZ%2F8IKTCYurlW%2BinYRc65SxP85InJ%2BNWlhe4dKv8DCFUQABoMNjM3NDIzMTgzODA1IgzSKgMV6t4j4FPmmmcq3AOa0jOh%2FDUtm6ozfn9WwFIYc%2Faq4uJ7Ae6Lnj84frlCsG%2F0QQLCpOucKvAyDuSQuljLGN6eBLbJJ4jTSbdSBkoo8RX9%2F2mGlZsNWNXbD33ak5WBt63tV7WZvc7SPKpWdmSkovkIyh4r%2FTI8KBt5BAbxeOiJi%2BT2PbjmU82mZA4VwatYM9Gyp59G3IH7itw0rON9coSBSWEkeV0kDV6UThITfbs1WMNK9gzfZJxMz%2F7Nw%2BR%2FJMLoNZ4tTIHUpFLMQKO5bMyVI3WVDAISIuJnx%2FmGZtMdbFOGembyVSPcj5b0PAbBo55bEGgrOyFsfSd3e9t%2BE27wMU71vZ8dEDsk%2FViprNGB9Bic5XzZrU%2BPJ3ejbAYckQ%2BTder02vIYb%2BiZZ%2FArZVE0rZIE4PXs%2BM3A9oCq9aW%2BmwyCuGRBwO8%2BlEFlpZ2PDad4jrAkJVPXuCzc6vHUtiZuZJa%2BRvFyvVNpvYcGDyZAA350Psm4gIayVHypbXQ0keCTvs3tqgqgPt59FGLUNTEUXZW0yBU0pRDgxSmDAQF1WEaaxwPMMzQfbjnvvbSulyxu68%2BUrxFSUBbWRzHhNhOmSqeuuC2GGUxHt76hANnpGbqxIXESYuPVlueM8O%2Fl9K%2FPy%2FfCFd9b3zCXifPCBjqkATqwfzeIQQQNF2HZ8aMT5h0kqtJamxj11VYtR7Z8oBUjj54Fbbup7WI7jRDaLhO1elkkgc94jhnpbhyGDgDrzvXRX4MjX8T2rO0QODCEkWiHTYrhC%2Fnf5syY6SoYDgnqtVoga%2BGMzMpxd4QsHnUeRkzPTOf5XFegYM6NCMuAvtfVE%2Fh5tLGm4KdeHBL9tFLpVF4oCSavkmElGiaBsp54SvKe7q7S&X-Amz-Signature=7f78da897af619ed89632e5739bbd5e29cb2f1f5a9002d98dd1360c600e4bf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
