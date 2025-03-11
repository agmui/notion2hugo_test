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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBFVVUF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIAu9pTypSmhBbUPqgxSSIl8rsegqmEilHbIyQu8BVj0JAiEA3%2B90WYcW4jvO3rBn89cXRZolQOgBzRmVPQCeiULi3E4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcTNPf6Z2srl1LkOircA94Iya%2F53lgQnfrpH8gPxigDoNr1KBsBMCCVAmvgXEKot8JNCkd7B3h0mpuGvJRROtY7Q7ztvWIBwwjy1Z0EVQ9Om1fv3KRsD6puxGNgcaVsv1ZaJqz%2FsWsBQwf1Hy6snYioqozp8VhJ0VgaI%2B1kOqTjQEi2%2BE%2BAeW%2F9FPFZF%2BWjdKEGlbt%2B5nSxP6lhP7tqdz0HzUMY5eiTS64wDE7a8O69Udqqqn2NUmaNdaNLMwvMYeVUwfp0ViYVHoFv%2FXRy6BeYeNOtUJwhhHsrYkIUVRF8TDejg3rftMjNpcN3vlLeqLnu8%2BNJrQBGuSyLAmkW6AjvMJGwQfBNHQMH36g5jTsH2Z5GCo2RuJnbx%2FI5BY6g4135tLWCEz8KiJ0J3u4o3UzwI3r2INdxiDWTTouW2YN0jIBVMNLl32zhVWB7ys5EbEoOUlSlKq8AGLtYpNFPlgZ31I1PPETllq%2BdFCORKBKkiTAn6NLPmfmCqlhxfC6U7RUeqYkI%2BplQR1HHU6gfrK5JYAVmw%2FQTjNevybksqyqJmghUMjgUfmkgFhlyPnAJSE6hCY%2FhAOBiA6oy3cG6PRxPci6UGVzZKp2ABmr%2FrCtgcxFHvczRcr5%2BD5o%2BeoG%2FtB%2F%2BpBsiKUymA8VbMKOZwL4GOqUBaBn%2F4UZbVBIw7o9upim%2FI312pEFtk1uWcpFr09tk5W4NhPZB3VZ%2FWfA%2BDw%2FmbZ0AaHPNfSMfTA4YJwO%2BHEKDsrl0x6XeuLi%2FeiyDyPTFAGeAAwDs6pU38rPpvIA7SpNOz%2FyQtfRVV4RopyHJ0Z85bQSAqgEUs93I4E2wOCT6fJRKNtzShb%2FskHENckNRlr3LtwtzzdyqltSh1KCefa%2FIN%2F%2BqILat&X-Amz-Signature=b5fe2d9ccfa978856afb6bdecd32a2578a1f4099a546de42cd8145b835136082&X-Amz-SignedHeaders=host&x-id=GetObject)

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
