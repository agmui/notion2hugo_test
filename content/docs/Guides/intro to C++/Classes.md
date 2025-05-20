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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHKXH564%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKFtt%2FtcsnaUVoGhOvvMtVWxiNjxF2sRolg9DpxCWxaAiEA2KXen7czwC901om%2FAsYpUmDo64ou1UYttSF6B194d2gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4UlfqKdfiZys8qUCrcA1uaxLGeu279dC28Gbykm2aoO1owvK9OwyOlCUNxVolfJcwoV%2F%2BQ4wlBGdXW%2Ff0IeEoKkKsPAUDu1Gw%2BwvZzgn6m2nGvMR6ciO%2FeNp85OfaZ5tHKx41wgpnOKohOb6cAP6jBfZnaimZ6d%2B%2BWiJwfJfAyHit7dB4s21qALVO6xIQp0dSjnI3qwvFiWMFEtugbTCN4U5pgAeX9KFnx0Rnh5d1sD8iM2L9Jm%2FJ4ibxGkXfOK7YmZ%2BZXAohzTboJnm6KliX8BugBP6yDxQh3cACoeFFtGguF8uvesx69JGZVXhujRdT5IPVS4Euv82%2FIkMmcPCXSHTHnMpfv2k27VE%2FricVGrCHZbxC5VnTU1od4Te11xD%2B8i1V53Q3O2ApVI1aDz0hTKQITUfnsV%2FavqkTrqNPiwn81aoZq57gDcEwy3I185SAd%2BSPb%2F2Aytj0SYHO2qzdFMKcOJ02xGgz5tTJrrnFqHY7m7GtZAo4Ygb0qmQJjYvNB9dF6cBMn2aGoklwZ577WUto8JFgGF46iRDIFfPRKBRazuZfVFbHxwOAuwkEss5reEENFWdI6O9YUCflNU%2BLhSljEoMzxkT8joZGk6H4dycI1Q%2Fj93JI5LERSVLMispaZ9d%2Bf099C0NyCMJLLs8EGOqUBJonGY0icZlevDitLTSaXvHcRg%2BWRQwnfZdF1X3j2BkzHy9xL%2B29eqJDH5O92m8dj9Wu%2FFIyouFwl9SR2Kz3%2BBt7rNyw3eLqoqfW8QCc7Cx5bgYcgJykH3nG9Gjq4oEE30IcXwWLtcHt49sH07FfyXutprg8NeTxyN%2Bo%2BrAtiFE9PSNHjLx7OqAnbBk2z2fdAIUkKKennW5VYFitOt3OStCcuofmP&X-Amz-Signature=ebe7658d0309eb471b4cff04c0d57548879feb312f0158efbc886d2809cafa30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
