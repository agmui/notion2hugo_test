---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLP6D6Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8702KijD63ztZpY1jpUYUc351%2FEpuMvBHzjccfEy%2BgIhAJZ7lHYEcg4vE4DCmtEOxohsPVVKiqGh8O3xyHbBPAjxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FcpgjNHxkdCk1HEq3AP98tH4HXXYNF94c%2FPj2RtU2NbQtk0qahGD7bgRhwe2HL58qUfVUl3XUNGQ0s9oCycHXi1DUooJAzhsXstffNt5hi0657Hi5esy8d6Dj9oLMxOyxMt2nWmsxKdj8uj%2Bz%2BB%2Boq5EhwzZYQyxU5x37Xbei2clzYL7GF6xpnxL0Ev37DPhbBcsdGDelQbBtk01vEtmHM%2BEN7cDBIKMHuVlMFQkJFGgjF%2BCWI3be7aIm0Wzvg15p2wRGixdeVsZ48q7GNUnBH58FG1N%2BoPnvQvXvWwlB%2F1Mc%2Bg%2Be8pJkom1dSZjhiQ7Pwc5DbfIiv0yt2zFj9SOfevM%2F2bzMCi%2BIP5gT6t0YVqlyZOP0G2qqtuTQ0ZWo%2FE%2F7VH8QSLF7V1XnTHCl81jG8muzQP9G6%2BqP82d%2BFyGEA%2FUzcZNI7ylV7GH1XptbmPWI%2FiPK0KnMWK%2F5dFpQ6zS1k1ZdI7oeSEOc%2BeS%2FOOw0PbTOVHj%2Ftp5YguUqqcefarzGtWL7wnfx5IN4YFtSbsJv4WyWFWqhHDpfRNq3fR%2FCTG5UDu%2BHYMVxVgXCH2p1OIoWN3Xg6IwVajUbPRshbE%2BynnP39qq7XZtbQNPc9b75Jg8%2B5TFPYkEiF7WmNkilcU6QFdcQn%2FEjJWB3zDz1LPEBjqkAeD7FRJ%2BoE%2FAoK4nYtij4ddAqg2cc2YEkdFaJTSsRSVetzPPx3Oz2UQjRG%2BlRKXCVcmfEx6UlcwS9XFNU7zzgXNIkEJjpZ%2B77LEe%2BMN3pta%2FJDAnszAXWRhtExXhaABFV1laf%2BBnz95jNoD6FBTsKG2X7CF01601zdHdwZXRoT%2BNLMA3T3aOhhbHuqWhRIQ8uEYZsQ5wYbS3Om3DgBZ3Q5Efx1uO&X-Amz-Signature=13db40bdcdc209ffeee90e402da59e42b9935dd5dfe3e5982e7c7be6fb81e6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLP6D6Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8702KijD63ztZpY1jpUYUc351%2FEpuMvBHzjccfEy%2BgIhAJZ7lHYEcg4vE4DCmtEOxohsPVVKiqGh8O3xyHbBPAjxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FcpgjNHxkdCk1HEq3AP98tH4HXXYNF94c%2FPj2RtU2NbQtk0qahGD7bgRhwe2HL58qUfVUl3XUNGQ0s9oCycHXi1DUooJAzhsXstffNt5hi0657Hi5esy8d6Dj9oLMxOyxMt2nWmsxKdj8uj%2Bz%2BB%2Boq5EhwzZYQyxU5x37Xbei2clzYL7GF6xpnxL0Ev37DPhbBcsdGDelQbBtk01vEtmHM%2BEN7cDBIKMHuVlMFQkJFGgjF%2BCWI3be7aIm0Wzvg15p2wRGixdeVsZ48q7GNUnBH58FG1N%2BoPnvQvXvWwlB%2F1Mc%2Bg%2Be8pJkom1dSZjhiQ7Pwc5DbfIiv0yt2zFj9SOfevM%2F2bzMCi%2BIP5gT6t0YVqlyZOP0G2qqtuTQ0ZWo%2FE%2F7VH8QSLF7V1XnTHCl81jG8muzQP9G6%2BqP82d%2BFyGEA%2FUzcZNI7ylV7GH1XptbmPWI%2FiPK0KnMWK%2F5dFpQ6zS1k1ZdI7oeSEOc%2BeS%2FOOw0PbTOVHj%2Ftp5YguUqqcefarzGtWL7wnfx5IN4YFtSbsJv4WyWFWqhHDpfRNq3fR%2FCTG5UDu%2BHYMVxVgXCH2p1OIoWN3Xg6IwVajUbPRshbE%2BynnP39qq7XZtbQNPc9b75Jg8%2B5TFPYkEiF7WmNkilcU6QFdcQn%2FEjJWB3zDz1LPEBjqkAeD7FRJ%2BoE%2FAoK4nYtij4ddAqg2cc2YEkdFaJTSsRSVetzPPx3Oz2UQjRG%2BlRKXCVcmfEx6UlcwS9XFNU7zzgXNIkEJjpZ%2B77LEe%2BMN3pta%2FJDAnszAXWRhtExXhaABFV1laf%2BBnz95jNoD6FBTsKG2X7CF01601zdHdwZXRoT%2BNLMA3T3aOhhbHuqWhRIQ8uEYZsQ5wYbS3Om3DgBZ3Q5Efx1uO&X-Amz-Signature=1521a5259e82fbb2f8f0796e79c5cebaea67368a266892da14e65c8b289b2aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
