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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BGVA5I%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd4LXdiqSt4waFdaCIcU9HxD07pjjCiV%2FcKJQC2JyIGAiBA4py%2Bdq8%2FHOISFNpXtCQR6u1DpBpmKsocrUQvqGYw2Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMGN6s%2Fq7MwnLhF6b9KtwDe9jv8c5YUihGEnfGdPdUFmu0C5FQe%2BWjO3J4X6EFD464vzsqsTat7BIMPhKN4oqhNXNSSH4l%2FShw8i6Lmu2AH45AdrsD5z5788fO%2B9bp%2Bwy2oFSFso%2FjnirsPaVKRQHc61tEjDfjfhQfVpwQ27MiVhVOZqxenpN5n3EuGha55SXf9%2BEp0Caqbx%2FZbR6U8q31KFEvsAR6e72gFFbPLH0Efvs70Is%2BhAcj1XGWGsx9c2XRH9TAZ4UGNJs1Cad2U3VbVviq5HH2OsQDeBBq40bD%2ByyIh91p%2BDtNM0x7JkDdnCo4Fbjf%2B8Bwsb7%2F2PupdgLBLN3Ko9S0od%2FJWbX5PB6GuEOz6%2Fj%2FbBf9EMaKE6r0eyKaGlZHecvmVuew%2BwimfMgkxab7Rt4d7%2FnNCLewqcD48zdbuw9AT2hiaY9YxhRrBb48UKs3yblph7tR9RvrQyJxT54%2Fwt%2FgRQ9tT%2Fc07WYhvvVlA78CJWyKC54H3jwdcxWo0r1aLZ8vP85TJ4L9PutGLeFQLIkHc7NzeOm05%2Bc9oVKkcbmzK3uN2r5MDsEj80yFIwllBkgJMgXQ1N9UAvIoCordl%2FFmcZM%2F%2BAgHyVP0V0n%2BzVZKAcEFg8tACl7ptSiaoBpZg5Nzbc%2FeS4Aw3Jv4vwY6pgG5WMjPX0dfzXZd9BIhN2qR5Z4e7cJpVAGiDrb6y%2FRJ48%2BydGmKzuomPZwzE7QbzYZl9N58%2BDH27X4vdaYwQwHkXH%2FMhqe7f7lnmfGal11eENsyxMQNovAPS%2F4YNzSBWrd9lIF850V9l1mXrT71xDc6NyRF9%2BYONWOsvqNAKSxkImZtBSv1RkvG2gZd2uutnp7CPNjYJ3apn3PnTRWR3fDg%2FnZYR2kf&X-Amz-Signature=270c89dbc7ded8cec90f4819a39275ea76cc27ba3f10c6c048edcea24c806b02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
