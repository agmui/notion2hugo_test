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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMNDY3S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIh6tu0kqzqvec4qPdb%2BkqK4fs2BZMDKRPSYc8tgUbsAiB3BjAA4VUn0XH98xI80TTEoNZ28%2BN3eD%2B3kLpRjksNmSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFdzYR3QhEoQDw2GAKtwDc95Rlepr6SS4hVAcQbPWs1EATKj5kwO19RVxDSzQE89T%2FclIPKyNEPXg8L%2FpgkJ%2ByW016X1a0%2Fg7L%2BorhSlEYMWEKGZ%2F1PEQnMf63WiaRfDusSZ%2Bd8bSYQwwF3heP1j%2BnHTp9WjzFTg1N8iMQshvmFvPDJBc2wfcEOq4GkIFHzMkxWpyYImPcgAV%2BREFSbDO1pMrFDWwuoltr2Sw%2BqLGojfmz9sLu19vqQ9PwDp5LweCV3jtRKxhhOlWpkgBISDMhR6xCLhUi6YUukJz1GBQ6AcKsKBsQ9Pd%2FTQBoan6zy3vZtyB2iZ1sJ3mGQ6FpOfG%2FBBYOAxFL3V3TwKwtyvNE7gi7H0ozQtXIZR14MZawnHGtuhpz8GKvarNCIq4sdeWRjajs%2BbiecByKjoVxSbHWEFudTlmADv6PDhUzYEpS2wOaxjd8clsFcZQBjFoBuOdRkRLhhfqo%2BpdCU7kjB2cXry095j3qnkj3B09YDroJGHq7TlDKDo2k1d%2Bm9RklVb8XF1oafxNLOhhAC26Sabp2WpUqLUAGp0%2B8cIiyCltvaB5VdxyYaQr7JB0nu%2BIlN2jTbdHYULgZRtlDFs8%2B6QUEV4pmQ57hEC2P7pUV%2FMRuyFKJfFQS6DBCTX9XV8w%2BZD%2FwgY6pgERgytPBDYGFW91%2FbPZqM7JFwEmGLThYggyPd3ZQkY6rJgVzfXqsyeW3PfJh5lCpVCa%2F2H3Oh7wyfekC7gpKJc3mm63cLqe5QaM%2FkacClpujR%2FJjACSAM7iY7ugaNnEV6saSyN5cEVIqSl7HdkG2AwZWB%2BQgY6CdzuxgwP%2F2Ys1aLqVEXmLKY0h6790b8YQtx%2Bl69cBYFl9pxmQQxCjv69%2F2vs7Dq%2Fz&X-Amz-Signature=ef7a3e1e3346fdfb861e502f1d9f7b779c47afa5c97a0dade52b2bc988600253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
