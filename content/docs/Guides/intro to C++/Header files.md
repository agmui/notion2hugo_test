---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

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

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z77SYCY5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBDrcvf6t2eYy%2BQ3ZygTnWeYEw0Pkj9KiK9WihKpNNm4AiAuQ7GbPZn%2F%2FeGfWhY8WCmTM5UPrYArbxF7X6jrcIuJZir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMDAy30JBpoYa1HKXXKtwDF2rh%2F2LuMN4nwICWjd%2FZkNCWSgOD9w2o6NHZYF9sUBJdT%2Be%2BGYNBK%2FJifpfLI98hk3%2B9jKRBODBggRN41I17M2bRkcQfFtIDVhCegSnWi2F%2B25pz580UKWuHwA55v%2FLgHC3N0ltpbV2A7ZpP0k7i5aSyBNq07acidwiSJ5tNAsDT2EZEpgAnWsZB%2BwVC5c5W1Qis7sCC2doaaciPHFvYp81%2BTNuMber4MW%2BFOfR5rcimgER%2BBbXc3Id%2FgZyagcregxl1hEJGF6tEmFZo%2BfEcAUaA984I4Ub7kkPAiTJIGM42NR7wzocYRKTys6Y2Fq7294DzRMMzgE4hxhEjtS5raBIc7uy2%2BMfjAXhcLmxBeq227yRDo0kxTtGlpsxdle9e%2BRFcWUCXGrnXYzhXQF3yKLz0rHJQKhELbR8qilwjIvteqiiHDCIn0mcAdSVvopuM%2FdETL5RmIAN00%2FO%2BXs10duRf5cvpR1UhPzf30qAU7tI9zuFf%2BGinILPJOxWw8nTOAzd%2FJ9Uf7LmcB0b8dcPXpZ0hWb0%2B5zakTJ5xiW1MCyh1mNeH6b70NcxPw%2FtKQImOmzVQZdwNN0H0MuMbrpJnji1Z8T6KD1snEish9U1nXa3XSlCDdhSv52fXVhcw7LnxwgY6pgF4Z%2F4hrNmuP4%2B2sfp%2FEa8iOTx%2BH6y3FOsW%2FgFDLPlqtkv8qfuO2uHBLb3zJcXJlC469SwaKGmyipFp%2Fr03MIjYJnQtoH%2FbJYk25y4J7vzFG8d%2BZuH70zb5D9hngHE%2Fc%2FFFLYvFvnOPrj3mjIajYikYkamRdQfemz3oaUACEXv2LXuP07oei4f7iBKRqD0TkOoa3hEdPn%2FyLHEiywsPgQ7GHYef%2BgMo&X-Amz-Signature=bc1a91049a9b9b0c909d237c0a99a7b44844955db998a03e80ea29d9c69e4d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
