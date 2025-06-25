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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C43U3EA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFVpZ0dTmNEoL9lL%2F7H2Ix5eB8IF7cy8bRNS0n84vJLAAiEArEorTS20J0rTMT1UcrwlXujxI6rTqcPOSB4k%2FEfoEdwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIhHG%2Bo47sdfLxkZoircAxnG3NcUjyKQb5sadkTiip0w1Eemsx600xR9rMCqENDbQxFIGUMwKLwMQjB8z9ccwKMOhq5XdjFpu4AJU5A%2BIHsPjzKUogDAd6VPIinIUqo7hXcDApyi47Ac0%2FnmiPqCKYkjWE4FD3OzmYpPgQ1VMalgyVG0FMUoxJGZntSZVK9ZHC2Fk4C%2BBusJ2MyuQi8ZOs7k%2FWN3%2FpGB6bwv5FcLteaUHqSJCX3SmgEWLpJT4xbCmDCWL%2FXxJqdOjAFozLgJdO37%2B6xgIaGhxCLazqVr%2BEidq6n1CwgUYAETxVX6%2BCFqH27iQUajFMSgDFXntybqDtsS39qMbW60f83XCjur0jdGhRLVgT7HGYVRsYtxZqA2%2Fp3sBsGgUInAzcGG0i8WEwFfMecDWnGDAKfUdQfjJIO6tuPtw8xeSD1DChjwNXbxqVTGEie1GnGnBs67YMpiOdSeHz0sY7jw8qWN3IyZMAx41NlLDulUbyKn0d%2B9BhDVurp5X%2BmIdI1k83JXQKuGwD%2F6FA4LkIV0zfkO8xmHoXrgmFbYki0FaMQrXx%2Fpy7myfonaRU1ULRJkXVj5IxsHhsaC86oz%2BJ6I5QOU1Ex0y2wku2HuyjgNYS206K3XWCQXJ1sD8T2KJXTfmyDmMPOM8cIGOqUB7Y4pSlq8csZG7jt9M5HcdYrQw8%2BgtX1HtIxA%2FiaS6za81qrpTpydFr%2FFUVzGPFea4l7nt1sosRCABTUw7lfu6MQ7PBrz%2B29EcNlQhqYXM1Bl6eoGBr%2B94CpZ6VM0FhY63jT787T0lKIzpkin35bar8%2FRL3XMVZDUvOHiCUaPVSTW3v9odlU8wWVgz%2BXOzIk0q%2BLM89BIM6YfeiohlrsSxGPm7HSB&X-Amz-Signature=46e4f47e01945ddc946280841b2d8044dd486528f0234a899ec7aa201f40e5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
