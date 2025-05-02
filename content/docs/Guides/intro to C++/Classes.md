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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AYJD34%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQD7LFdljL7JiFkmx%2BXPt6WrmImluhvxv%2F576LbCEuzgCQIhAMuWGzSPnV0Mf5z%2Bbbo%2BKHYowboPP9Jn2msMbeTW9UiCKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD%2BBGdyS%2FgvlHxtvcq3AO%2B7sU7adN58JP6fM4BWd8yEveyzmmmc9N%2F%2BFjGmkkHrAnmiULAr2%2Beds6dyLqEBcXl16zhyaB%2BUPNrMgnwKz0wbpqQNY1bpR3iLlIniJDQDNeX3QZM2VOHAWA9m%2FTadxmZ7xbsePYEbAwPK5UgHK%2BK1BkCry2TAp1NtiwGWG9LD1i2LbRnDm37Sr2PholLti5AG7lQCm3he5SxqOh3e%2BC65WI9vJJgsLEwqUvhGjvMfEJATLlrbIVlfgCJGVU5s5nGrX5%2F9%2B5z5UYDXNDCGlBfvOt78WZr9sXWfpAEV9jzZYYaMECmgOV%2F%2FqRYlF0pthJvkS2kVBvRvtiZE%2Ff332YsKQ1n2EOIlPcGqIp%2FzyaKZAnnzvJs8BW39btWUkjgcl2BioVM%2FC%2Bhb5pr%2BhiKJSqAmDmcjZEpJcmssCAVHa9qEbTvW1c1AsBhBOyxfY%2F0FBEDWmdmaYnRc8wTSJ9KmoDpUIDqeRb8rb2PR4JQFo8yf1vJzdcxyhvKR8W%2BG1PdhSxmSvpltkQYCgFYJKBvSK%2FYkA%2Bc5Y5CO80fHJTykcq9zZ2aVCrWpzYNU2kf3j8i0%2BYPsy%2FyHD704WWxES4fEKt3XOwWOBkvzrIcxr3%2BBk2oo3IVK5wNIXANlqvl9zCD7NDABjqkATc0q2hPVtA%2F8gTtw5gI6WZnfIjY0MtUtX2Xq%2BdzUbgQoRwl6vPGfeg8IJpw8bwOpkcV4wWoFavTdwnZzOdEohwumOfIyLSvdSi25DGp9n1odJ8yEXT0HVqktbXrB79pecbSQYq8LiY%2FxuWVGv3CgSXec00DLHBCxPUD%2B5MsHXKpUZj27SHo95VHgodnAt1mwF%2Fj3Dd8rj3K05ABjeQbciHX9AQ8&X-Amz-Signature=98c8716714e2e9987b9a1b11015dbe0b49e71f4bb343d1771175ad0f23b7f6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
