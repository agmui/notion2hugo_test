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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDELANX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE%2FaZkBIPhf92JC9JfBPC9N6fYmYEYG0kjFhfhP20O4AIgZKv7Rc4RU70yugUN%2FdnB9RkLdluPJoq1XMM0aE7fnSUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDACnk6zbs53kjtj3JCrcA5n3uHRQJYNHHkhYnzidZ0VFfIeZvmV51AvT0xinDR%2BnBgzDhJXuyCXgbhJ67fcc2%2FHDt%2BeUfGRlrb9C98POnh6Ckevy%2F07ImkFbqhQEC0olaiaelPsLt5WEtp6OkSYrU6TUdDP8b6GdD8tag4sdqwiMHAao8tIDhXsQsHwTzPEChqPVvIWU5CDbF7P6oRPB2UzL43Xrjgc8J7pufv4y2rNvf%2FjDWy7t5Ao%2F60eYgY37fLuxiqgOq2QyXW%2F5Bx952lum%2FFrYuMiZszX5fL9LMwe7JVo7asrhbc9pXzEOGI398RIAoSSYnbeFoTkdmE3KqyVlgVHDgSqmCDRFal0Euw5mWREka%2FLZ5%2FVak4TIhCNaU3hsHGjuBcdX04YI6K%2F6W5xozDzY7I1oSZotYoFKSuLBd2p8%2FTvjEBvp%2Bma53tr0Km%2FAQnqWMXqjR%2B9MyLt50YrTRz4uDuKE8VUNImIa37VAsWCKrBVLq1d%2F4R1gVn4GknB5rV0aV%2FWS7w0cB%2FHH7%2Fpcyfc5BIVZ%2FMcub4m0XiyZTiQRo82i9TE4SuhPf3pAqds3wE2wdRaCYvibuO2m2NzXMmGZCAuxz%2BZAJUmCFWcju697700hx0AtOnMNbOM5elooh1MFRTM38RvcMObjw78GOqUB64%2Bw%2F55XL%2BpTN7nhw4EXZso8T28ElFfe3J20Xp3w94K6OSymDlnQjlznh68%2BgYCXVpxFKChu1w%2FTaoRPY%2B9Ju6F%2FSyaur6cFIORvI8nlJ6VBmFWN%2BrdWqA%2FNON4%2FB49Mi4T0JFw%2Bc12lqGUMJkrtV2HVZ1f%2FB%2BjUNxDoQXVjazVueRGAYJLKLYCs9PzC484bJi5Fep0lVPzXA6ZaSqY3iF28yw3G&X-Amz-Signature=0dc6e595fe8b69775aad25ce02d9b8696a6024ce125b92f3dab537ade7dfc240&X-Amz-SignedHeaders=host&x-id=GetObject)

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
