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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HQPTKX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBCvzLqowWcCHWhp%2BvkoxH6qfkQabTDRgHcR6ydkdv%2BEAiAkXRq2l1sYvKUfrImGPtbKEY3WIz4NCJZe5hXX0wJ%2BqSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2%2FCWS8bgUETkXWsKtwDjG0vxZovlKzq8cNiqcpvucYIeAcVZrCi1%2FxzkiEdh%2BrhPdeIZTeg9SBO0Og48ai3dCh4ikAWxsuOPtkL24phBLNg4crnG9wxV0gNFzA30lbCZtHaCkd2XHPjjoVUdHd74SwNIkqfrCyCzrZf4LE6KA3FUM2t8VbrzdMveXngnc4j8%2F7Ae8kbf8NyQmwI2exR11VLgKs77XQps63vLqtKwzLM8DVfQHXMmHffZ2Egz%2BVwViY%2B1Ej7uA15c4DPlpTpCuQPRNUS44hHU9s5zM61EBnztganOjyDOt8D7hDaDN5uJPLcb4thP%2BsQdA4A1PPn%2FcehE59IZPcXujThaKfyUeWZ0alVpQM6MSTf0u2u1bS6Fkr98NKFmfWFGOMKKMeTEG1ERFnfsF1torswkn5ixrm0xg6qoyX3TT%2F4isWnUKJyxCFaQhCVD5NrWdqAZQnIFviyTTqoJu0OLV0j%2B7tuqBeG0cT%2BxysjTj0PMDO7tqJquo87AKVMoXRyXwidzPjrpSq0dPdGq0vYCit0EOwM%2BdVCaboK%2Bn9EBoDYWaPCdG9046r1NqlGHBbKA4EnfBD%2FUV4AYE%2BiCcxyL4CwOKsFshyhNOYa0qt3TPLTtYI18uNgw4NIYpclPBTpa%2Fow9%2BznvwY6pgE0iaO9uWCPI3JKU8UYBjOZESc3Kzcu%2BpziaawN1iTNVUPS3DqYb9LHSf%2F7KujHrx7FBCIS%2FD1DmwlkK6Jza%2BqJfzufz34CgHUxg7%2B3%2Fy7wa2fKgD0KVvNmvStkcwds6ZruhIPB2sr7eRirX%2F7O2Vi%2BSNYznBrL5HjFhNF3chJ31p2c90yxNfqpBFXZzSmAKg2jaL3Dr%2FJQHYKn5niCfxboeg7X5uvt&X-Amz-Signature=efef024c9e5ae9f4ef8ecf960afed14e44c1ee23ac7f0b6c10babdb4c34a722b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HQPTKX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBCvzLqowWcCHWhp%2BvkoxH6qfkQabTDRgHcR6ydkdv%2BEAiAkXRq2l1sYvKUfrImGPtbKEY3WIz4NCJZe5hXX0wJ%2BqSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2%2FCWS8bgUETkXWsKtwDjG0vxZovlKzq8cNiqcpvucYIeAcVZrCi1%2FxzkiEdh%2BrhPdeIZTeg9SBO0Og48ai3dCh4ikAWxsuOPtkL24phBLNg4crnG9wxV0gNFzA30lbCZtHaCkd2XHPjjoVUdHd74SwNIkqfrCyCzrZf4LE6KA3FUM2t8VbrzdMveXngnc4j8%2F7Ae8kbf8NyQmwI2exR11VLgKs77XQps63vLqtKwzLM8DVfQHXMmHffZ2Egz%2BVwViY%2B1Ej7uA15c4DPlpTpCuQPRNUS44hHU9s5zM61EBnztganOjyDOt8D7hDaDN5uJPLcb4thP%2BsQdA4A1PPn%2FcehE59IZPcXujThaKfyUeWZ0alVpQM6MSTf0u2u1bS6Fkr98NKFmfWFGOMKKMeTEG1ERFnfsF1torswkn5ixrm0xg6qoyX3TT%2F4isWnUKJyxCFaQhCVD5NrWdqAZQnIFviyTTqoJu0OLV0j%2B7tuqBeG0cT%2BxysjTj0PMDO7tqJquo87AKVMoXRyXwidzPjrpSq0dPdGq0vYCit0EOwM%2BdVCaboK%2Bn9EBoDYWaPCdG9046r1NqlGHBbKA4EnfBD%2FUV4AYE%2BiCcxyL4CwOKsFshyhNOYa0qt3TPLTtYI18uNgw4NIYpclPBTpa%2Fow9%2BznvwY6pgE0iaO9uWCPI3JKU8UYBjOZESc3Kzcu%2BpziaawN1iTNVUPS3DqYb9LHSf%2F7KujHrx7FBCIS%2FD1DmwlkK6Jza%2BqJfzufz34CgHUxg7%2B3%2Fy7wa2fKgD0KVvNmvStkcwds6ZruhIPB2sr7eRirX%2F7O2Vi%2BSNYznBrL5HjFhNF3chJ31p2c90yxNfqpBFXZzSmAKg2jaL3Dr%2FJQHYKn5niCfxboeg7X5uvt&X-Amz-Signature=7f658b1b23a7e07d0e00eb279ff6a068e38cfcc0b490e945990f98da9ee4d163&X-Amz-SignedHeaders=host&x-id=GetObject)

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
