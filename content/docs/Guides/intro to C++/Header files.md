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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUSUSUP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHAz%2BPbVpNQc%2FLoT40Qk4qcQwjbBPL63rcUEIEyvm%2FAiA1H9CDUZOPYIDS8FLwmBnoyk0kbZfVXDso2WLkUT1gVir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdBJ0ETnYAfYfNwiyKtwDRjALXRRthlfGzhlp%2FEegPpspNRgyHdPwjE9M6XGAFEhuvSPyBga31f%2FnZhNb8PxD%2FsWd5ZlyWdYhdwAvHRCAIHJ65%2F%2FweMrCZW1u%2FMqRSXTg2xhvVO6nGk2YPFr6XDYviGIF2%2BBb4atn4TwQfihN32Ut4dIl3ESaES%2BXw2XSBgmF2F6Dqptn57TbthmauP0FR6PoGiZ6EQIevIqsn6oHbCfWVSVdqqQ3Dv0AtDKkK82iwBIejGID6hOUhNo1DL6NhjC59cUEQTqFJDBEObVlHmUTzPpCcXb0pF6K%2BXeeuOI2f7EEfg8OYRNvlYqNjOFc5XCVdbD1brpcgTWuEHdHWdKvfbEJAg3A8%2Bh%2BXX34YPEErqsMyeGJZoQ%2BVYu54cIJa7Sh7W7nsqMg2hAgkGdNpzuQFJhupXNU%2F5RfIcOgdPuWYeVpiwopFCaSQBcxzF42EYEG3USoq8vXclSv%2Be2OdPtJ%2BhZ4yM5fGvJUy34whjxRLeUPzRAPMKcum4OH4INBwjIZw9nt%2FF2XNpa1A2ACOGBlsCpaBoRfWfCSD2nF1MRldn%2Bh6tQLvPZlAK%2F55zy3BbqxYFxXmuCf6mOFD8W%2BtY%2B2yeFaFNFuGUwA4JMCQspt3er1kZTv%2Bq9SnNMw2peMvwY6pgFMIUToPnyt3T%2FDKaORKEJS2ttxggJTFtbHz57a4O4EkorfhA%2FfcvQ3y6KzFs9d39M0lPkQIpib33%2FFnnBa7vz58SIiELrwz4RAqIUgYiPPTQzMvqLuvkDNoynDoJ7AjhKmc4rrO9VftA%2FWP%2FY5CAXm9YoT2rMP9SmUxZmsW4k0S7jJ08d87ycjyP3hVDVNc1nKve4RPCZ3FyaZH9%2BAl52pW13Ryrp1&X-Amz-Signature=406719094aef884510b1dd615af38886542160632216b30d6106d72b610032c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
