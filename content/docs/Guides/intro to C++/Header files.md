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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GUHU53%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCowf0Kq2i5hokoApTNy2syGHK%2B3WFisnkv3g%2ByALFYIwIhAKnZtfaeBJzfNy7hMRCpW1oOtWYrFPAeIOEdjl7wWtAMKv8DCDUQABoMNjM3NDIzMTgzODA1IgxoDmIp5gUgNh8qjoAq3AM6xdi3nkRCOj%2BfGCN%2BPSiBYZX3rxzQljl9SNynQRV8RnH09%2FGuhvsUvAVsk7OxlttlfNZPpiMk%2F9%2Bnci4%2FcfvdBb965rqLdW2TK5QHgWbh%2FqcJZG9GgLpVFKlmdldRSrmtcTBRr0wr42KFRfE3HGR4638qXsZUKHtEUZVjXtpRUdwBVrELQ654V%2B%2BFakNppXeGkyvbTlqKAOTa2xVLkL%2By7wVaClG9%2BMAt0KaltXmTvv9DsLK%2FxHeOE3iZgFFIla01SIym5CuNNIZcrWlyRSgpkrylwcJrX3uvcVKykC89XNfh%2F%2Bqe7m8Y3VmfbZJ%2Fhh1j7Qy9BJQZFf3g23S%2BOsX8JhjmsycEbzaaxlFj3dLGFcj1VoV4GJvRTx%2FG5luF3FhDZYqLkGgEuval9NuaWvIpU%2Bk0oQgQsSusski4MkDu8ou%2BR%2FFe1Sn0HzBGNhdW63CZ1SXzIyFGMpDpb7NngFSWYJAVhMyBpwePVEaqqefmEBPleXLXavxNp1gxt%2BWI3UZqp%2FhsWBzzG%2BCcvh10xjFy0RerP68zSzdh3zysJQChZcktscCyvkV41US3OIH442Epjc691Hk5FQQ%2FIlcToZyf7WSALqF8iNdJPMLKqXuhQ3RzuE2rS0rOdRLJLDCV3Ny%2BBjqkAeFZFi4VVPnFnsRje7HSgn0zE%2BUs%2F8mpVUNG3aPrDwWLU%2BKWRL14K%2BlXRSWQ0STCsbp1snzq68pGiKsD3nt3ptVAAsIWb8jDBW24FQt2vxJ%2FiZrz9Wq2GmtEB54U31qNz%2Bu%2BKrm1gqeeI%2FrjRBNSLeqx5H4Sf5z%2BA2X9A4c7EOuZODlZchmoY%2FGR%2FY16l9Xwux4HETQQvzMRhBMLxRUcVJxeLTzg&X-Amz-Signature=43dceb50f535f2c07b6812831688f3ee0529bf5dbaffbfd8598ff019ff6e0e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
