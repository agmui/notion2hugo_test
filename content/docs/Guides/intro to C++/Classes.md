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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVSNAUR%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCroLiY6f9kmy79EcjkH5t2FssTbny%2FLTT%2Bnnd8XVUTcgIgZDFhSo72l5PkeAz3HALOA71JPkM%2F5%2F27mevQ3RYKhVYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLzHHs2VnyAxW2Cf2SrcAyw4QN9Tlv%2FSkg3jMSaFmShgX6mbudKO2FQkQArjdHEz7KnSkmY6Ns4HZRXiO97PMunPn680jwy08YctdvbpmcmIItaMdfYvos3dxWgRP6bn%2BVGkfIdTB%2FA6h6IyvjPYq9MtcWhT8OeSUugPawo48Q%2FJF26g5j1T79pEc8opq8t5170ahGy6XjMbpEGCxUK1xUAp3NOXUlZu60YzvkjYd4Ci5An2qm4RrVjBlUyGNTyHVHCYTY%2BTg9BN%2BmU8gcSfOgXWQD%2FihpkI3W1nPdasMplBvulSkPLRtLrv2SmlBLyTBVvxhkat4AieCmmFdE6CSqB%2FKz71zcsLu0ugQzOeSW1ToOIcX4hKgyHakSHjkF0GMx51BfxwNEdzr5URs9W2R0Jdovg4j1lHTxpt0zhG4RPYlSWFIGHWMVtj%2BB3EepMShSEvgNtvICs7WYQTZwjAp5sZQ0BolMY80ryKRKUu6xlyOr%2Fcdwy7s0V4R%2B7rPie%2F3TwlOae3dFZDhTFnbqJod9qCS2T2gIEne%2Fv%2FHg2sO49q1sOq65oGZse8SPtZkgEtKb%2FBPszvn21tTLrb80%2B7z6bXJw2ZguXBvujKAcaCbLnqrlX7DgKzbHW9UjBlCufbT4V0tnHPWvbiL2sxMOrdqcgGOqUBMLyS%2BpNTJrqpM0pE2671PC2QlzePRC06%2BmtgSWfDz43gwdNWG5srMogM%2B%2Bepbou2KI5lahTfaAOL6HplwJJEY76f6ueOlb69LnqAaRDkqLZkT9OP7N7cdnQ3bRsBZyRyIIngPEeYk9RrN9XYnxH3bLH1UdDS95d%2Bvi5ZAn4ATZV8Pl8EBsd8y9Viamy5gjTl%2FIuFT92rDh4waxCFWzG%2BsJVZI8Um&X-Amz-Signature=0377dc3a970b5177e9e73c4ef46f6b9cc01cba44512b739fdf2a6857b342237f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
