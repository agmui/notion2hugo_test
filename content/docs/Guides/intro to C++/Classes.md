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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRK6NZRS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD5KIgLyM5EftFgLxMVJBbrBfm6m8bmY950xMuTYYnffgIhAKtYwye2dgzYI0tNdvrkGgkak5E83Gh9ibAS6L7%2BkvLzKv8DCDQQABoMNjM3NDIzMTgzODA1IgyvaJ4Y70FIZOg2nLwq3ANGAnXhY9ffmo%2BiUvycKYqVTaS1v30Qs%2B8u4G1mnuS4L%2F9D3GA5HAhwlOFuvosE49T1YGZ69ICvIIMXLBqfgWPrkrORHGzWW%2FaM8nJ0dwPHrAPFa7CUOHwtnjZg63sWePbMf8z0GHD%2Bi1LIYLlmzfrzKlYhk6%2B2ZHKjUZ55%2FZYZ46ZD3x1QlaYhlDCgd3svyo%2BnmnHA5p10SrOezLO7XA4vGWZtq11Bi7bFsFxYudf7hYDRJn0L4rYVOx5JzSv7q393I8hz8pQlawbu5413aS7Vz%2Ff5mkM%2Bx2%2B3GkndWP2uMPSDAu%2FqmXxGVVd13ClJ%2BAOAJGCndCaifUb%2FOzFRtyXw3Cpsl8SIdZFiiq0c3qo%2B8hnVFwL523xGsj%2FC3J6msL0x1RNGeWnt6Ol9rVcDzM5mHnYkUOtGDWQ6oYx7iKYzywUn763nV3OBPOJ4j%2Ffwayi42ehX2DPMnUO2YdEgu0H0LqT%2FFU3yMAGujHEP6zYslCeTfhK1u3LIwrrxoTsfeFAsZEvpnUM%2FhK89aR7Bx5vKSZmzveIK6DND0gRyVPJ3lnvY55yWsJDLjzkgbCdLVDh6KGaRCIHIU5uNVm%2BYgkid2Yr9%2B4mrLYCcIX48vMoo0QyQv1rS2p%2F2T8EAEzCRv6DDBjqkAYWiX8du78H2xzqq2NUUXuFs0wuahCc1enre9l5EACmiFJyr6EmqNunw4sDAtn2SowjSFEoJd%2BRaAwuLwyPwAW1Ixxqk9bzcm1c4iGOL4Q%2BwjbUA2kYBhSY5NhKWRHzoBaDfG1w2%2BQmQkWNjAKHcjBYzYnElIljnFxd1jjw%2BJnpSJMtX77rq2U129TUzgK8arpMnMYKjJfMer2wTHEOVXxCbR4KO&X-Amz-Signature=a50c4255dd816624745b5f13309fba199731c290184de164fcef91833249c8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
