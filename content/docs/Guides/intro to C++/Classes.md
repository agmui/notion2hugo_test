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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O5TY2A%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLiJz%2FpOphkoCZiHv%2BpkjyMcuA%2FtfZ67Y5Cznb%2Be3LiAiBsF7Kv6rdLp07zVlmpqK9L8OVcQnNgBafa9OyHgFsz7yqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHAgnjuRC4VJy9Jh7KtwDA6In6oy1wkolTRmdNZEpqaG7fpcn3G3ybxnLMeiSyuCz%2BmCZQMu2e65MfjJUG5F1vVdKvCmvfKId6rWZPANQE9yQCSGbPwkCQBUBG010Xgo2lAraF34X%2FLMgZ1zMGZigqdd1nmJ0gZ5NSdads%2BUlyA2%2FO6XV7SDMuttoc8TFS%2BrsI7TLRMJtQp85WN5V54Fwjage9HHdpHqCCw0bOiWjuzVmdpeBZeR6hKzPjQSbfz5CAy01w0t1xzkNsJlZH1RWnb%2FYvgVZvEawS%2FcZOLtnyrgD9i9O9trXwjR9uPCLXiqWMreGZH9desz2wJouiaPVOb9Ktvtwcg6nLc85WWhBYYkVdhF8ZofOahdVJ9ReyNalVpdmscXML3kowNjMUZpRS4t5wPg9Ki4Fa0gLT6bjz0CcJ%2BFh0IjCI%2FbVugSpUphK05VDxSb0fvAjoKCw1qiVM7NeAESstDksiz91CJpVxGEZtKRvp%2BanRUPI1u495ny%2FjYTvojEIIqjEDriaW8wPAtHl%2BoDgOLZVg4li9qY7MCNDOa%2Bb8f2t12%2BR%2FActplI4ppFGmhqghDPYLtklIB6b8UEDGB9WZNPmJkjjtTrAvR2O1qOZznYGDDljDghPvgilbi6FOBbJm%2Fv1c%2FkwnL%2BY0QY6pgH8EHuF1g5fCinBb4TTgSrJ2ZNj7HNhICZgiBXW%2FyQONbYcDR4oXqpi%2FFs6fWSda1P7Wl8JjQMq3hA7kdA3VrPBdyKAdmHKIU81Gc%2B4N%2F1tucQma2cgobaTG9Zo8Ez7rxf1W8PREz1xuoGWdTm%2BtZa6LBpyDYFErfhgipQg%2FM2xpucQw3I3bqNOGnXFLbN8A2N3YMJ9TeSUc39lFdnDVRVVbsy2pjrP&X-Amz-Signature=5f6d0eb26b72a2028ece2ba5b6c8aff8319b160b3d45088421e17308a10e6715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
