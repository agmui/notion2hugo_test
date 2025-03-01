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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MEI6ANT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBl0Jnlx7mhCtA1GEA9wV7XIuJ1rxkgofVrYGvB362sOAiEA7e0OzLq%2FqCV6LQtC%2Bk1pZ4xIsTrdDwe7q5qR%2BBDIEQoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BgO%2BQmbd7Gm%2BkWyyrcA0rMN3otuHIsFzgrGEZapPT5wsRwBvMvdspx%2BlugN3wq4JroL0JJK5lgLu1peG8EYCBaBcfYA5%2BUNrXT%2B6ivGy%2FTP2EhKJjCD%2FoGIxH5nZuF14yk3KEY3kcJ00uMfRn3SzWLVuFd0k3rPl6chTff5oTdhQw9XGu4gyb2QR7SHzFCj1Ja0hcc1d4u13U%2Bw1FJdMk8F7IXZ8zTRpb7zIQ3N6gSo6pCV%2Bvoo241I1LXOI8%2FS8BvMw7Ok%2Fv7hh2WPBJeS7ZJXRS7QI7lu7NlACNiQmb9ZT7%2FhFBURYukLUV3OFa84Jtt8%2FfAnGTsJSkmJEfyQWhUbbiljc2Sw04spV5K3UIw9EkM6VPMuUKa7FGm%2FqZoxTPQH1B%2BmiIA3Nt11ZRmvq6l%2F%2Bk3vNU5TRjiku6eCIRVdPblGbAgtrBI3NV3hCq1RZyc7nfwCyEOPn6HuKOkb1Z5J2tLFRetyeaFLNEtm3RuTRwcVkVSFCmJT1AhSPyU8M%2F9EuA9elZfEwuYsL39a4BoqX95CTKBisUGWIr1r56IdWwPZw4OsMkVsqobdQU86WPwVuvRnwDlEwgyP4T911YqxugH1O%2BToLvmXd9mvWQHD2S5tfSfL%2B7Hs3a8PK03UyX5%2BQWQzxAfeZWkMNOqi74GOqUB2yehAwgiI54YOjMdgS0VWD5bxwq2MnjOYKAkahhg858368krYDkLDq%2BtbE%2F5Wf6y0u1mzFSXaZ1hIEaPLYRrjmrhMtx5WfU4C%2BEGdxQZXEvOW9B6HeanTUiUl3HALj3naesLtUQiKIAvHvX%2BUCrNIamnUTeVgYMh%2BoXnd3lFj7%2FzI4c%2B%2FpAoWYrsHBSTWCNzf5A8CKCOwedwIrjecyizGmtiNT0l&X-Amz-Signature=2da9b44acb230092ccc4659c5627b58018ce4eeda4d77ac455bb2ee82b9b368e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
