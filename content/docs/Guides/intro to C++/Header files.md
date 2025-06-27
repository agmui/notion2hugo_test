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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HPWNB%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDqsuPObL7HBvwsO9DDBEYdsVsl%2FTUYSCjG6b8oVVvchQIgNFL5xi3KdLDw66xRPuOC%2B4VRHFeZNwKBh1AF4zoeP%2BQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF%2FGNFa%2B3LezXf5SRircAxiKEljqV65bFhx%2BHkMrEj0qjOox73fTqusiVy8qPe77FAtvhB4HDwP2o%2Bnb8v0J9URCPWOLARuuC46i%2BszZ597lNfU1KMjfoYSyivDvQfG%2B5JrMOwKejKhX1O1YqVxY5hIvn8hVvJUd2TK5%2Fs2Dvngz5EA0eDtfDxoKDH2%2Boqzq%2BQsW5M1A6pvzs51rOVYUugeMZ9UR6lYMqL6evtwFG0nMvHP8zfAJnyz7SJKVUcf9POMn9Woe5YqW56FymuuYkkyxJvdLUW%2BvytoP5Gv4iFAb6Jud7nHc13OMKqw%2BH8FogjXwVYnXrBO%2B7R9%2FZroGaYm20ozsGC4xRgGJKs9qfMb7hJY%2BJ9wVmoaAb%2FLEAeOt9cFcVEjq7fafYK87B1OXOfbRatBjb4StamMs%2F9evSK4jUtIF9dQPBk0LVbP%2BxUcLpvzrIKmQ81giIYu6ZJfbm4crzDvumAcSHHQ9w2RQlHD018UduCPiuuERM3AUufoqrKoes7kMYhhzTU34eg1yahZOIjYVCBkl2B%2FLC%2BCm75D%2FjaUlAAa6YEK1bWsWNi1jGER1LdQ2p4N9RJR3DRHm1ouDSL7%2BTGYB6CQmsA2gXGgjBE97KFBxFks9oOfSz2XC5fhyPIOBjxyc0I5nMPOm%2BMIGOqUBeIbuQrSjDPqzCx43VxKOLXOPCXaDvCkOkDcF%2FwvQkdRKfZ9DKhLUAGQcUdPYO41l%2F2dz0P4xOZGmfHatJn5ZX21DIgQs6bRBTPs9nZAtgJvG4cSlnCKceim5uCDI%2B2bxiYa4WCl5nfqwfjRXQAnjziv5iCZkm9Blu3eez19NqNubJpW1%2FLAWK3WmQEDQJg4y5RDjc5bo0ieVZCUu0WrV%2FjCxRhAS&X-Amz-Signature=de8c009e05a766dc0c3a09787342045d7bbf6c0d63e796aed2a120dd59b08743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
