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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TRUBHD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkoaX5%2BSzfatmM2ayB4NwsVuNWSyDo8yR%2FCawinZRhtAiBWTQfyus4l3308M3nHC3%2F55bZsFoBgx2RfJguvrWiFGCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMAgjeF1wfKvNVcBzeKtwDOa18WyIeuWKe4nujVy8jGz0QFiEXCWRG4UCusH%2Bbx9X%2FjYQ7v41LTdxR6S%2BcCCL%2Btn%2BN1P4SOULD44%2BaT8h6Z5aj%2BE4MBRwcYP6iDT5Hd5j3z4oaxuOj4dPrmTMeaS9QaUZZa7wZY06GVs2QjdCajrNR%2FyVFrDRtjV%2FN0gg6vE%2FsryeBhhXG5lGEUY5ss4jLUe5iMvHuwGadhtCbBj1blnifAfM2ve6MG4iE3G6o1WSK9ds2mtnrX15CFsaUZ3eSe426ByHt%2B1LwbnzY6qFOnoC0Jae6pHB7fIBwe30%2BIe8cK5o%2Fq1GrEO0lLWOChTg88ozX7vND5jM7yhmh3fEBXnIXSd9Gwp4gkmWm1wDRJJLf3CrMMqdM%2B1HSvNt8k%2FU48nHZqjVyYxfQkds75Bb3xSemRWZHBcGLutEgouOG0lMDDw5As2sCmwEa2vz9OnXGh9e6K4NW2mWa3B0wF278d5%2F2qka9WWlZUz7tz4uzYYsHsFbxPJYiPm7dhAHB5GkJ%2BCw1gnhUZ6hMKdQZLj5EhteeODb7bDfQi72dEimwT0yyTbl%2F9D%2FMMFN1sePfevAxVt%2Bbi8rwA%2FvJ0X%2BA349f6uDPwoO91TEJFO3dJXQxB84wp9UoBD2Zzc0yI%2F8w0OCrwAY6pgH1UUMugsXjn4DXi%2FUnmJZ%2BAleduxMoDohQF6wDfvbGsfPZ6r3KfDDLXtPhqbrzxGtFCTocV4ClnVpzzo%2Fsog8CMS1XH8eckalP3GSLteG0WQr98SGaVvbSlYmq26ihfwf%2BQkYLEOqF%2BQc4suRHmOFx901Qb2u7zbNkTluE4ZHC%2FXgK5TH%2BGFlf8fmCg22jCvmql%2BhR0SiEUP%2FqJq9LAB2kPuEEi609&X-Amz-Signature=c5d999eda60e81fb395fe5c68ecc2aac32747b644db576e4e87e6c7f6a7346be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
