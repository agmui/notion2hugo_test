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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FOQDOF%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsCXOd%2F5xRqGnfiy%2BiLrcqbgYn%2F4kYYdPsr1Q8ZJ61SgIgRE0Vrb6NsVBwDNmP%2FUUQ%2BdX4qGMF9DYhwTptwpLmaVgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJW0OmmuU3AUwv1fzyrcAyNC7qP2ZbNu%2Fjj%2BJP3K5mSBb36%2FYU4LrCNDwhf%2Br8PPDUNMOpKfurOkkJSrsT14BApLhkDjA%2Ff7b6cMJ57L8J4h80E9ARRL6xh0Frw%2Fx2Uwq2WK6Y9eHDhO6J%2BguBrtF38V9WiwOLmwsHfZNpeOIIAWAfrhdeCkafVxVEjsy4xDWTbR3osdfWKWuJUvvuOXpRlAHyYOblIwoZ8CUetLFHVytYboffuelW0j8y2i3LE6e8b25935LfA%2BBgCL9WaYbsIL48Nj0HXuP9PeKzsJndzlM%2B5%2FcTQM8haBY8qBcefb4aXbRnjEuh%2B0VGvcXixy%2BZPHAqIZ9be374%2BX2%2BXCCMlI9E6qDGxXi0m4957KTsEFv%2Fb4GkO7AyiT6N%2Fbq3ILZIo25MCeBqkNwayIrRas5xT5bybZdthk2hYcJQwnc5SNhoLRxQx%2F6EnpP9joTxf%2BSVKYZ6f%2BE9xGw0tki04m6ouLjzlfc5Pt5St9K0rehEZhTJfqBiPOSamHj4e5eLaX158TTad2jx%2BySkOZtY0oArK7F7cA67CXueH5PZZFvi4bKA60TqH5OVtoj0JnzmyJZVYpNzdwRaw4l6kCmglssdfy1VzHo058%2BjZznyG%2B3BwVAvFpQ3zsfXefNgHuMLKUytMGOqUBfvmfIm7nd9uz%2FPLTJ7bhFoyngAFSe%2BCMlrBQRA9lxDu5eJb1sKFZRAyIwpPl9fsvrscF0ZhVK2XBKgoRGxjSxuI0Ckk3xZlfF1BZNak2d%2B4rtmJMvCpUajZnuJ1vZPi%2BXDjU5GKkcMFUIalol2C3jMIqhONXVz8j6vvpXWz9IkTvxen6IXUxKtaq94EzAHUSpYTDXgwr%2BBON2T7CNehjjSe1qyxZ&X-Amz-Signature=4c0531cd99f16546896fc9fedccf2460edef1ac17e785dc11926e3e32ff49af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
