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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQU72GN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJTvqHjkIvrNS7owWHFSMQ6yn7atgU1ggkIPG6xfXEQIhAOulhkOd9egyUTZlUoNr07ZCpqd%2B%2FIs634LZ9TTmTrGEKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBVmP%2Bwp9b5LITGmMq3ANedJqw76bHD%2F%2Fo3Ui07Z3%2BWW%2FRA4EWKqpiIz6WAg1ackBi65ys1ml%2B4BRc7NH60AafnHpmtcvgjiTHgy%2B1UqiuXkFHcgmtvvA45oG2T3YdyuQvvZesbb%2BJchGPnJo00K55viat2nODX%2BV3DovpEFmQ%2BmlVurlN6iIkLwChu9crdRKjj5l%2F7oDydfy8MwtHTvEAhujvJ%2F2XCqMdLprAue%2B%2FQFwSlo1Li1izpPFuOyPHbkaEOtrzUGZ02qyH%2B%2BGOWRsFdAfp1VByQUY8jaMO2MF%2FpJAwY%2FWxbljmaJysKaC9eLsrIrrfPohtt6SWiVFLOgM8rIJ05gCH1k%2BmPqSBcYF05FvMmkA5BwFZ%2F1fIU%2BApNQzLKsYubQsGJmaiL5Ivg7BX%2B6OySv%2FsROG%2Bdto8aJFrn4kzwGbS1sIpsV2knx4G42WQ7eYEWv0cxokBWDLoyjrC72rHsyPJndC69cox%2FZIpYmZYrQEX2Se%2BoKB0%2B8d4WK4jDFymBhNW5eZ0P5FUFlH%2B0Ikm6%2FKLuvBucQrjUG5CEDO%2F0BZjxCRoUWMtVBpuF4FhZHm7BqBgEAN7vEHTgB1aUPceP5udahlRPxWrT9%2BEogJPHuQAAVrqaiCLUrVMmexEnCwW8KVvRwnWMDCfotLCBjqkAbQyNN9K%2BRzvP2rKOp5ZJ9%2B4uGfClyxczZSQ%2B7VRLkKfVCjFexgDD4kcvhdhiyAVG%2F6IPh1u0T66ynU3dJ5C7DNkb9wZ12Nywy%2FEsjG5nPnZagST%2F5CH1ssG3CgP15GCP6qZbPDTm2AnTbKYqZBXVMr0VrMzsgMW9xD4lnyV62vSDYCBtuJICibsFicIZCxPOvbLmK9LBZB0LOBkymS%2Bggsy6JCX&X-Amz-Signature=408cfe04f1957387db8e731a88ccb40e8dadc7862786bb913232009b8f5efaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQU72GN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKJTvqHjkIvrNS7owWHFSMQ6yn7atgU1ggkIPG6xfXEQIhAOulhkOd9egyUTZlUoNr07ZCpqd%2B%2FIs634LZ9TTmTrGEKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBVmP%2Bwp9b5LITGmMq3ANedJqw76bHD%2F%2Fo3Ui07Z3%2BWW%2FRA4EWKqpiIz6WAg1ackBi65ys1ml%2B4BRc7NH60AafnHpmtcvgjiTHgy%2B1UqiuXkFHcgmtvvA45oG2T3YdyuQvvZesbb%2BJchGPnJo00K55viat2nODX%2BV3DovpEFmQ%2BmlVurlN6iIkLwChu9crdRKjj5l%2F7oDydfy8MwtHTvEAhujvJ%2F2XCqMdLprAue%2B%2FQFwSlo1Li1izpPFuOyPHbkaEOtrzUGZ02qyH%2B%2BGOWRsFdAfp1VByQUY8jaMO2MF%2FpJAwY%2FWxbljmaJysKaC9eLsrIrrfPohtt6SWiVFLOgM8rIJ05gCH1k%2BmPqSBcYF05FvMmkA5BwFZ%2F1fIU%2BApNQzLKsYubQsGJmaiL5Ivg7BX%2B6OySv%2FsROG%2Bdto8aJFrn4kzwGbS1sIpsV2knx4G42WQ7eYEWv0cxokBWDLoyjrC72rHsyPJndC69cox%2FZIpYmZYrQEX2Se%2BoKB0%2B8d4WK4jDFymBhNW5eZ0P5FUFlH%2B0Ikm6%2FKLuvBucQrjUG5CEDO%2F0BZjxCRoUWMtVBpuF4FhZHm7BqBgEAN7vEHTgB1aUPceP5udahlRPxWrT9%2BEogJPHuQAAVrqaiCLUrVMmexEnCwW8KVvRwnWMDCfotLCBjqkAbQyNN9K%2BRzvP2rKOp5ZJ9%2B4uGfClyxczZSQ%2B7VRLkKfVCjFexgDD4kcvhdhiyAVG%2F6IPh1u0T66ynU3dJ5C7DNkb9wZ12Nywy%2FEsjG5nPnZagST%2F5CH1ssG3CgP15GCP6qZbPDTm2AnTbKYqZBXVMr0VrMzsgMW9xD4lnyV62vSDYCBtuJICibsFicIZCxPOvbLmK9LBZB0LOBkymS%2Bggsy6JCX&X-Amz-Signature=512ada4972f5eb315d7e6ea77bb3cf8d4090b13fdfe69b521e442b253ac3e0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
