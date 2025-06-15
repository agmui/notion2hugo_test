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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEPW2K7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGInO6CY7oNlyWoqZQ4uXjOqRw%2F%2FIq62McUQpKCrRk6eAiAuKcjg1J0hIU1uOwYMIWGsF29Qy1jgTwkOQr%2FvxJSfXyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMh8DoIVqGWcbYUQ7sKtwD2SVSrT%2FQCEBIM8V6zUHVrWMacEoPXrenr4dLW8WRR2j2osrjCtJIpE543Becoa5fssEvGAyxYVjWN52ucpNxl6CF6s%2Fa0AKxnEk5b%2BJrl41GXFRMCLEKdT%2BNq11NkLZ5P%2Bfe6i9NZ42SQs7cTrsyh8GVnSl47inhQXxgkya%2FcbB71kc%2B9NQ5I8XQeB%2B0JxES2kOHuT1HrEz%2BSy6l5aG0WDQrhpOOuX3PNp8OgVmUBjJmpyl8rD9bjPHqCpj8UnB%2FBj9p10yBBeFB1QvxmHGZP5cvtrHqs1pCRDw9YPSXLWBRoqvtt%2BiN%2BbSZ1xUyygliX3r7ddH4svRP9Uo5Z0kxbl3QGQQRau%2BTqCL7Oy45d1wOmehnOyyhPdKSbHiwRi14MIb8IthUtDi1Hgz7pdEfUSrFgkLXaKtAD6Mz0YICGd%2FzqMER76YHsdM3aKP6VB%2F2jcjpbc8vC%2FGCFuQ8VDg6AtEwk%2BN%2B4JF1gRAuV%2F07aDbKj2M4PGZ1KY826VisBLQtx%2BkZAdg4F%2F%2Flo%2F7RxcB7pbUwrYbD1t1b8XjawJM8yYR9sBDCr8SZYl26deimlkYaSa7XKhaF6Z1VPmEogw5NS0TE7CfxxeKf0mOiXGVZA%2Bx9FpYCm4UWYEOOg2MwuaC7wgY6pgEtjhamW0jcnwhGLNUYTySbfAISJks2ifVBF8ADkb5J7Ypr5O7fUulCDBIfWwV4DMrpWm4G5BbSAy61xS3VS%2B90dyobNsx5Z73wzSereRnhkRKCJUn9TMwcRsv%2FTMhAzLuwvIUJRnIwbB0Xso5Uz5aLPGG1jIeY5tO8Gtzapx5ARH8Cf4oyRyFWCMGzht7TlZwwD%2FExg4elRi1IjCuqqfJU1kpeg3Jd&X-Amz-Signature=f834b8c16879da276cd63063052d7571d624d24272eb26e0b3c250cc280b0c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
