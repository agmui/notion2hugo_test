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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3BILSLJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC1ILHl0oW6r1B6l%2Bg1nxE7vojONSJ%2BIwo4IxiDb0v7AQIhALq3n6yvhQt9NvicwJY0oZXmmcMvrYnlLjCuvh3%2BWM2DKv8DCCAQABoMNjM3NDIzMTgzODA1Igzvd8il5LSZSLagJtYq3ANvFmGfegnyXz7SGBgkTSsf4NVZgz80BLrjgkFUilnqBXgWpcAsz3Wnt5%2BlKJWYPxZEWMPwgVJBKlh%2BfD6cyAeiKIgeLX4e60w4jHETbMS33cDqMPP%2F5uZCMVYIKAiLR8tSFtglg%2B2msGWYUFXUvSknuTpVzcgdrpuzj%2BpuTs4qJ60x6MQ0MRZLHCMdH7GR5n3lqyzDCFpVM6JU%2BlNmEIpxkUFmU%2F20qd%2Fc48wQ%2B0OgtJSGqNCPqYUacCxmwdRiXWoBAKSFB24%2BwIvQCWVQuGvqhav2S098gbLFQK%2FsBXQ78IU9rGJGypKt1H%2BlUdTB37Zqg%2BgIUbsXGF0%2BwNk45P2uUVeqmEBYCt6LibtVd3qcZAh9UgmR48HHOWj3G5k80u7P38twoOVVWbfayl6mBKJ%2FZIyU9rEg4PxcNpLpdTXX78R1LOpERpfEEIit%2FsITru3UQHaANieO9rGLcEMEKElV1jgfJppGq8%2Bd4a0vjgV3rM6dPcqfXApIdG1hfjmNZB9Y3ez7PxR9dxnpIKArUps7ahhXzw5zHqpiMsOWF5s9Jju%2BRVVUyW6LsX1jUpvme1OG3%2FgQ6XhJchTvIvcFBa%2FnoTtmbp7%2BJBq1WeNwYdokrpnKjwXLkvSt6LfMdzDJ9%2F3BBjqkAd%2BUpqWsiOfPTUeh1adKVvm3S8gPQhw2UWKvOZ2j9pLtXQRQCgOzLgx2EoLJXz7On75vSw4b7A7b6jIsQt%2FghtmX65irJH2Xy4sYheu2XMhtkfIBnC7jh5icRP%2BeD%2FKedXYPwdrZyMxelIy%2BrLh0SutJrNjygkETTfhBiVXnCXOe1RUIkHxE0SWXEyK9jZaGs6WgL6zk%2F0htv6Ceq8y5C0iwcMgZ&X-Amz-Signature=47e2736e8dcfed31a274341e473fb30afb6f0cd14e5e1e7c3710074b216d68b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
