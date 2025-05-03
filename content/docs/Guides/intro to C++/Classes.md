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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXPHIR5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCbO8mQoWX%2FCv8Mx8OQD9OabNdOBUEkUFRTgkYbZJY0AgIhAIXts9hHDMDi42KHBfUUpHyJpicOrrAemUPvs3ER76UuKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLOI2khq%2BovdjXyZcq3AOfcj11WGuD2rZmoPu8%2FwJflwyfDO66mKmJKZ4mapB55rd8tWuA%2FwYM2CbSj11Q%2Fk5IS%2BztFeWFQMykn8bM2ZSU7kJnAIQhWQDNOgtv3q12fd7gFVd%2BMFjzmJzX9y7AXSLHt0X%2FBOZzsuFQiSNAZb2UFj7LLowFW25aayXPibfSLJpttDsKE48afMC7u5iXeDuMxJk%2BwbxRPqHI7xfM3T%2FD%2FQnzmFbwwJB6JbAeZaIIczcbohSuk732bh9t6Jbq6ysSmHBMQ1OOArqTK3YCZYdYLLQ4h00BouYlYHvCIxOGp0J0sa%2Bk8v5YnA76JYb5sBECbTLTVol5LC%2Fflmo6xAC3yYNgrwfNIDOhaKpoKvU22u0la9WXTJd69EBNb%2BQX0YuKg37MNuWe1m0%2BJU%2FaFo50A0KQ1disNAvrBL8316YNgcv2%2Bowwx8dsgr9R1jW8Ttw67e2iGKx1AfsxTpYt8jir7fhvqJVGVfZJvmS1OGLqj4Mt7BCiIOHRjpUnGepxjunTLxthoJEu6gWM%2FKTC%2FDDa1yjEsbWu1wA3TVJGJNfSsQNRLDau0lUGEAa%2BX5g7ZzMiGy7fzk2SHkHPZa2yX0qaDecXciWAqabaJKbuUKpGVQ9hUrviqeA3sAdZszDbhtbABjqkAZbPMMaZptLM3fSpxxCYfwn9QDlo2DLl8%2BEKoq79uZ3h6scZzSQwWlZB5geiGm7kfQ9iu8Pcya2gGPXKa3D96AXRCaNYBBL9Qm6V%2B3RQMMI32WuZr8Eb3enmm8jZX16jeVVhSp1d4KAzxOP7MX5kWSU5e0iP3LLusp%2B2wMJ4Xa9nKO61cXlNv20p3b5mihStryC2HgZBSmWSFvh%2FRDT7Te8PhjzD&X-Amz-Signature=7dcb4106e3f9fcc0132bb9cca466db96e0fdaeb8ca23a4887a3a040fae81392e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
