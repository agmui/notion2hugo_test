---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-06-29T17:03:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-06-29T17:03:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

Why do we do this??

	In C++ we can’t use a function until we have defined it

	**EX:**

	```c++
	int main(){
		printf("%d\n" funnyNumber()); // this wont work
	}
	
	int funnyNumber(){
		return 69;
	}
	```

	To fix this we use forward declaration

	```c++
	int funnyNumber(); // forward declaration
	
	int main(){
		printf("%d\n" funnyNumber()); // this wont work
	}
	
	int funnyNumber(){
		return 69;
	}
	```

	we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

	Here is a link that goes more in depth: 

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```c++
int ILoveBen();

```

ILoveBen.cpp

```c++
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```c++
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

Ilk.h:

```c++
#include <iostream>
#include <string>

using namespace std;

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```c++
#include <iostream>
#include <string>
#include "Ilk.h"

using namespace std;

int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\\n", galOfPilk);
    printf("%d\\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```c++
#include <iostream>
#include <string>
#include "Ilk.h"

using namespace std;

int main() {
    Ilk *i = new Ilk(420);
    printf("%d\\n",i->getMilk());
}


```

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240629T170637Z&X-Amz-Expires=3600&X-Amz-Signature=85d2c090473ec7e323a2b263cb5672f5814b4646c0d7101e42b4d47c3f7fabf1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
