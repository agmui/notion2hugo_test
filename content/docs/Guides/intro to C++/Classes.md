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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZAMK6SW%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICdxtuw7zrwuQ6%2BiBvmSom5DontcvxCx9p7ZxuTNVLIdAiBRIfOjI0rDzEmzG56YdSE5yz6o8V1L2nMP%2FEfiu5r%2BwCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNe2gAHUQlRmVt%2Fl8KtwDVCr07m%2B7WU1IckwHELgGcGPohT%2B9PpILYuoSRpN4WEI1z9AN%2FAt9iFXn7LfSjAHXK6Zs6y9Dh%2FANGJ2ulxEelPtUg8N3iVt3uQ1eRNrp2cSBa6xsw0WJ3UI5YVNIzxKI9%2FYsAysN1u07l2wi84FTFDyx%2FiXIAi6FJjx0ylWDpaxWdqLe6yvmK1PwiDWz8Ji2ZxZyI%2BfoNZnrkvv3ePNUtcyq1op9gpXgNFEJglkryqG%2FsInpPv3zx1P4G1484C3YLHvwfhs6kNn3sILcDTwvPY%2FcCQ%2FWKi1TOC3gXHG6oP5%2BGs2LfmPEAzlkf6tRYOUNi5SbsjFbQV2Q0VbPGP9X8oveZSB8%2FOn99ttUSpdDZp0kF5COL1Kq7adtuXX%2FkU2%2FioIQ29z%2B4TknK3Mi1QyfG9Fg%2FMGQpG%2Bvz%2BilLPkGxeAT1%2F025vv8LEKVHlYngVCohk%2B8D9ZmGkTYEDyMQ0Nq8%2Fl87LazihoaU72Im%2BfCT26N3ivLMNm6XkV6yNp%2FEReNyDt2aVNqj1%2BMdAjKC58hjy8CaW9Jz%2ByzYTmhGBIZPdLS%2FSggBHkPHVGM5%2FO%2F%2BGhfpojs2NPg5cVFKpQdDWO6xtDkexyVCAD11Rsbl8yrjT4kREpThCLd7TWdAEsw0OfcxgY6pgEFpqZ5xZVJ9DzOwC0q3L%2F%2BvevImU%2BujiJgK6ZZ48r%2BbZJugYQ2LxqT5LYC2Mz9Pi4oZjimu4dZ4nhYfL6EKkw0oLsClPZoenlnyDWEvyByTjTpaawuOBCexd5eXPam%2F%2FyI35cHBn0ubkpVBrF4XJ%2F9pe4kkF%2B%2FEvTKm%2BE7INtSVJ7ZRUpjlRB8dfg%2F%2Bqzi4noPJmuwVqcNviM%2FpBcU4RRI6894Effe&X-Amz-Signature=72c77d4f1947e7293aa4cfc12e5b8f942c5a467716335ea06296f549787f8206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
