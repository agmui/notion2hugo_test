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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQPE3BM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCCbR%2BZir4fELptCpwSrbmfZLDLHxAcbCdsOV%2Ba31cocQIgH5uHM3rBOZ5zNpAae0nLZbnqSxWmWNqfQjKz0V%2BzCzgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAv6YDxEWs8eN0cZUyrcA5U3Cv4vnQf9pvCipz9LjrdC2yi142dkfS1s48sXsaSsItWnkUMrkvF%2FJrwVsXEnnVs0D7GRhbGAaZokYBQRojdFAWFUWglD6A6rDHB5Pev8rlad9ZuvoyL%2FHoOx4OVZOwIsUD6fRIrJS3G%2Fp4ygPI222xRG%2FuXqNReRD3FftbJoKHjztt1yx6DnusmhAgpK3x6G7rhFgFTD4tmjYaiVPgxILwN%2FGdV%2BfNDzf2rSAM%2B9iVHIWllu0vJy9VTEoamPw1vrZO9%2Fhf26ayFwZ7YI3eKtrW14ra7%2FA2SwXQWwznty54OTLSm4dQl3IqAImX91pxKqovX1ZH%2Fx7JqX7k%2B2tZYGlUUdNG2M3eSt1PmhW7cH4xbKDhTQ6YtVTL36F55qEf3ogRMxpehys9Id2uGAFAvjOLiN3qigy1hNKi1D4ZvO7k%2BoK5iZ7LRx8rRilc8dYzORPBBp8X9uRgBQ7mdKBvvUMgLXRO5mSIFq7mMsqaaU%2Bu59kx%2Blj3bLwZwzHA98h0Ntq5M5brnjKGwmqZeNx%2F18nTqljUCSM%2FAvMTSyDTot5wu2PCA3LaCppKnTyDdblRimaIwb8YgUoJNEcu5fe76c8M3mwdfyzvqmcbbBMlsJYZKniblyQPb8so5JMMSOwsIGOqUByXjCcHJjdwyjuv7sT%2FaxjB5llRtsumkaKw36srQZCFrh9Ny8PufpFyR3iA0%2FSxFjqLxYhSzIvaZ6huYrpZcxdDde5GztDJIOAF%2FcYQckmWOqR3B%2B7Crc5tNia%2BlwwFOXYxckdAoF3a6Th1MPPtkpxQnDVuwIuf4%2B5nGSAUq3MoK7CrMneIs3uMgJiv%2FnXcGOvYnYJO1di7VTlqPtNQ5owze5HEfH&X-Amz-Signature=fc3c895d0fd27c293a58a61675200d3ea1bab0f0b6d3bcbfe27ec161e927d8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
