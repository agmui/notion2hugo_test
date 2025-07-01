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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UTVPHM%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmxUkRZx%2BQlCha81BxtFCW0qEJfs0EPbOCQt6z0KdzHAiA%2Bs96WHl0bYUQL1a9njfP9P8%2FU2i5tDkETSTWcS3rumCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMclj6YSAjNgRdEQeYKtwDp%2BI8GIJxnVB2oNXidSOh1LvMlOUtrr4%2BPsl177y8WOS4hcul6606CJbX8yVdhUXyPj0khG9juP11pZFfZMdMnNuluU6c9o2pZuWAEWevNxzrdD1D%2F1%2FtOJOwMyinHRbuwQ3lc0dbwP3xn56jnQcYYzRa1DjkypapqIHLcN6K5a1y1f6uODn2tX32PdlUpP6kRlib7dFo3TwSLrPbe1qCff7fdUDNmHY4LlBZR%2BX%2BA9xxC7SBvqyG%2FG6NZuwpBI1%2FFqLAc2inZ611ixGiBkQYX3f0saX%2FnlCfJy6%2Fw8nZNA3rCIQRZc6hn3I8G3mu4s6mhrvR9KFOWSKLqBl6U6bFKpJJ9QtafIzW9lcgSS1eMP6Rscn0p0IJPxJaeTSsBVvasnFhDQx2JmyACeknf2WUPPBkv%2FQA36JOOGSHYT1PKYfRQ2FEFHwl%2FMOEA1KijrpWGr3qyragcCX5O7jHDYZHYRQ654yQoVMVAirThE9MpkEyu8M9E7tUYhP3Z93mpl22DlLKTwFZ7wjyQSMLQk5E1ibmiLoJuMsbSmjtfHFetFyzj9BgA7Mfh6cl%2Foa2xpZVUst4%2BFSYc98wPVFFJMez6G0Dk0VRgL6sjolykKUUYDgcM57NETsxE%2FrF7UgwvYWOwwY6pgHqCOkcAkhvkbWvxItp8fs6HG3VPcjjBR2mdg3Y5hsz0lAZg9BTquTBfG9A9smSwtCRVzlHgBh7WYtPtpYGTyhdtiwRoknTY4d8bvhbZRHcipdl%2FnORMdqK3%2BTPQS0DVXhhaJrcPNTq9Rv0uXB%2FysmhYiXlIiPJhhA3uoxFbIQIF3NgUrmVXoPuh4KGouDKlGx6QermVAGqmaRaQCd9%2FTD2XthbfTzi&X-Amz-Signature=98dd351a7770ef0d303f2ba17f887fac52e8bd5e58497a532a20d2cdb71ab612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
