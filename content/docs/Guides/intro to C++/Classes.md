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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAM5XSAP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGlTnfOCPbdguOnkjguwpngWsPtbL0AK5IjJH4dUm5O%2BAiAvoay2HbG%2FuG9v14cCiBViCXA5iKGaP9WdayunDlGZUSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7yt9Otrw6PtKbLgXKtwD9a%2BKW86JAdI9lQWXG3l8OwPHNbR%2F6httZigSSCZI06tSviUXY2Ka2r2lXSN5UlMKIuuW7M%2FYWi990GwfAWWgYk1rBomSoI71TsM%2FLQuETS9zlNKbd4Ke3n5BDWuxs3iVfKeXJhktJqi1atvpN7qZumKVHePMGJCNlaRLnz2al5n4RLv7CZThK3Y8rNN3Jvg%2F%2FtHuTYu9hYhtyrnrzmHCJSC2%2BpioSpeJqmX74YZwB5fI4VOEG%2FVtq%2B8HibGiQnUnPZj1%2Bj6V6jA2180PTvx%2B38yQDl%2FgQ4eon%2BW5EQX6TMb3T3QOjw%2BFtUgMPuT6fGGyl1WSjHGNmXoRK09c2hoTo0Lr%2B4Yylx0P%2BqgSj3ujJQF1Gn%2BPD8HqnOdabO2WcS%2FmP4CvOgX18FtCGk9qnGn%2FIribPqExtcANfxiVXKEPBLUJ4ZsADo0nhTKjfYEfmNvRs3DA%2F83M3c1B%2B%2BwoUhhKQ7cg3xYjhkdWutQIAmRhl%2F1sTOUqYSWsJvcZMp87IbdNcFChd7B%2FdxwZlzBOMCNJazmy9o8UpTWZHnsu5Dfjm8PZF00sr66xRLpRmfaYRPK%2FRvmGM4RwGM1%2FYu%2Fs2DeqBif49nMLd50BqOFrx4XxeBzOLumtbaHAuA2Osm8wkKKOwAY6pgGK1cwI0O%2Br7l%2FToaI9gKXLV0%2BKKq7RsjMmcWK0z20NEgQSTOtxEkArRbsSQnF4Q%2Fb0YqPA0T5mSWCcUgf0pkrpFWvblqgDb0AYkMUTTuCJnkgV9xTW%2FIUr8jilIamJpJHlQ%2BDP88Rx87ToBSRv9lO6A%2FyMtpjjh6N3gQjXEihq4X23woYF7jDa%2B5AiHYspDe9eP6N2aSF546dzO3d5595IJYpMPxYc&X-Amz-Signature=6aca7db099d04c387d38844ad21cc10d247a6da3932537994bff725ba6b0d870&X-Amz-SignedHeaders=host&x-id=GetObject)

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
