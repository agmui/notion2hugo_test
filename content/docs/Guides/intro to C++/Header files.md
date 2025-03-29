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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GSK4E6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCHaoNNL0pF3WqYnHijIXFWIgONII1mqi2qx2fistlKGgIhANPoLkbeWl1SDcE4jCsWufCiwhFJjEDTefzSn%2FJ%2BR7YjKv8DCHMQABoMNjM3NDIzMTgzODA1IgyWERFd3DQM82JkKDQq3AOzEydmYQ97%2BxupNPnLFHUsBo99ch9h%2BBT1KTEU8kfV9Gz6QgBubOF1Me9MN8i%2FS9YIZ7S%2BeWgBQY8tJukVXbZhXsCOpb00lr7tHyOOB7gQhdDuYMVFPdb8uAYxAvUelI%2BcEi2yiHS%2Fi%2B8%2FGQWzBkMOlL%2BTkqoGqcwUE3dHlQa0%2ByFx9pKuUeL765HjlwMBhHDCIpeoTGfQexlk24PyFqTaRjiGbKUtXiakQuNmIO5%2Bfk4Ays8dPDSH62T8UZ%2Fx6BRFpCLjj1qrc5tLdt1laIeqEuYcpt2tkjv%2BN47L%2BJBCh2Ai68TqEps98ecmtIp3glL2TrcpYnlXRkpn1kLJmy%2BMaeFosXhNFWPlCqelkqquf4eqwauk0pyAWj9JQEpD%2B7r%2Bl793rPAgCBdESeXZK6Ulv5HPR%2B7%2BtgSCPC3a9H9FQ4Ef1Dfh80%2Fd0mcvYGlecbO59GmIVYlRU3GBNsY1pibQfrCjCp%2FZFte8MRr36sBxd93CjbYh4SZzSFayJaHHs0M9q%2BUV2hE56%2FtZXsTMHibnew6EkJzuXt6UMAF1ncNvqKB6oBlXxMlvIN%2F0hAzWD2rEYn%2BWGnrx2NdWKL1InqTr%2B9Ewa1wNtWOiFmcEg8J8x44hmIvyFxRfM%2BNI8zDNi5%2B%2FBjqkAe7G%2BD%2BV8UHX4eB8z9j%2BcRClTv35wyVEUOg%2F6nPVum4he2wRlmhPjEh8T4J1yDdIaSoBXTCiabf7zVpsXsXuzsJaJENqo3ZHJbne9fTaqs9%2B02Pey%2BborYD9HlZomvImyWE5Y2JV%2FLrDxthIp%2FslFZlU33MKymjU%2BZrStME6OQ23wkloj4HC42r3zVIdDLpIG4htW028l%2FdjnOmSpUVEcuOgpskx&X-Amz-Signature=766473253903f4239b188a687bd66284f94be6cfee81eebed4ffd16a59d4f043&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
