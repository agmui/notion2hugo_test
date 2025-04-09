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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWF7C7KK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICQlivJnZ2pj1KDe89KE3J8v3v3CUSwws33KgJJGWbJRAiBWj9oUqx%2FmAUjrDzPJtKoX9jxbWfw%2BI4iKRqXNmhbHjCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0c1MPWyA9%2Fpoz9B6KtwDJ91rh8taL88Jv%2Bi5z7iQqBnHTU55PxCD7qlNgaiuN5g5G8LT8u5ZplK%2F%2FMgqvsP76PG%2BYNUTFBwgxKWxczuI%2BCbeP%2B2V3ZDyB%2BsNPX%2BoVLqqTs1dGMqpNkiNkxeqBoSN1iu20FxGPJoVj%2Fl%2F%2FzWBh4%2FWV7LVbz8Z6juYKnJHd8jrNc%2BwwrSnuz3aqxrGObPgJP97N%2BTDnXiQ44GD9Rpmzzg1uBf%2F1ktLzaP5ujDmcnw6u7eigEPJmTsaNqgwh1QQPBOGKG32lkXXpN0H5g%2FG7GmWh%2Bdi1hzcSGvwKPvnPCDFmXrw7TEVL45fNeF0kxoAyfLcZOFTDESeIIT4N4wySCf93p7pKDa3J8D9F1UUAM2ITvDoGnRuVuDGH2qyc4EYNHIJlbSjy%2Ffz4DL2TtUnPDQ3XiWjG8DxsFOr7bRwpj1B7U408NyCHP%2FjwWcErZXFzZVoeMxJh3e4GMI%2Fgjma6e1Iyhy%2FDbewvinzAZBFBnsC1yC5FGXncIz%2FpcOoUW7rvsMDriunvcf%2FLo%2BVGylgKAAsWQKczt0cxY4oSd%2FZNv5ILL5k8M04P0a8kFU3yXM6oqQWSBCHqVg8cSZhJ2%2FqK7E5G%2B1DKQkwqzPkEzr7ykhngpIQZa%2FvFBRS53cwiK%2FbvwY6pgGLJdmohviXsAqeJiC2iuOnGS0s6lVDS6iGAAMXnCi%2Fpuv%2FI7Dpea4J8GZ%2BbtqRIKeLm%2BwYHrucSsbOXpI6R61dvRIWcV2cHVRDYGJmXKmYKuPmYXtjGbT3xb5o28werk2IXMgPlhgTYzCCiJexRDESkCw57xXMfcMJA0fYQVnQcDZsBWwnEelC9WczayJ9DzY9J2goiQwchkLUOUQqQAlPohdk0xlU&X-Amz-Signature=52e989c053399ca98bcfe1b3049a9cf2630fcd9a8665232da2553b307be41f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
