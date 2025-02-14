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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC7BOMIL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpgT%2FM5EksrCsTlb%2FVJPovnDiYe3ahflQE1Hvzia9UuAIhANLXkfatdqe%2B%2FzpeIuTWQ7wQbz5hJoAnxMBC8o0wDBNYKv8DCCsQABoMNjM3NDIzMTgzODA1Igw2N34tv0WZ1XjNLvUq3APeyoBiegk0cZikaQHCSRvkL6%2BWXAablAYm9fFvOXh%2BaYBMLdku5jle%2Bf0Eo3v3typkZfKcJS6yLcJcaVXY%2B3018oyjjZp8n1%2BptdyXilUz2Ak%2FbG5%2FYpFC%2Fw6vSSdzbfz8MxHRGtfBPvIh0ZgBJEKftg2WxcmQn6%2FRrmAD2zE9JEYz6gFIUJyJ71u0BTAJVxNauHcghIe6xB4gsa6b71H9zGaBiimE%2FtG6QZrxQMyIojjjBGyR3kUOPXDL%2BUS%2BdzZe%2B18ulZ9JinpAoLTMZzKKaG42FM%2Bz9tXb3t8XI7PBOu8EWaUbTmHxXxJtB82ybRajtm9OuLqQfX8DvnO2BDCSqNK8EHWqFjSMTQUqo0EzeXOk5ktVXoxK2kKYXYCdvt%2B0KUY1wcPexmh3%2FcSDrylx2FdbbMaWcQxCheBRxGMKKruOi1hYyqbD5%2B2SmhiCfntOVoYO%2Ba8kCS1Nisk%2BRPSLv6yP26LMmgM1e%2Frdx0s%2FaKodGQtBYfi1EHztuY8YgHP06q79Ky%2Bu8ylazEXz7z%2BrxSAjyzPt2egfMNHlfPQKan%2FsWX5OW9PzUD9G8wZ5Im9z%2BkGZWCbqIk5rYW%2FKBamijShCOeTFm4HfuYvwH2S%2Fi0fd0HR%2FJ0jRpQwgLjCwsby9BjqkAQ8qGAehp%2FSy74kEhVDc2sRSQaU5CScDsuYc%2FTlNNCUkvffrQ0EfEmoSWH8%2FjhbDQoq%2FyrTn5XlFiTVhZtH%2FdX8qOj9pmnwkt1TBJfqeBGdrUAuG7O%2FLiPGnfkVAmhvY%2ByAGemm5xnDjm2boGosLF5V4XZw%2FGUh9jptGm%2F%2F0deBTyrw7be2rPJF25SIT2zalymsW7b8uZmbmBjHzhO5n7AmOzcVL&X-Amz-Signature=e40c7f44ebb03044fa39dd8954dcfe2b50e785db023e31473229125261b790e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC7BOMIL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpgT%2FM5EksrCsTlb%2FVJPovnDiYe3ahflQE1Hvzia9UuAIhANLXkfatdqe%2B%2FzpeIuTWQ7wQbz5hJoAnxMBC8o0wDBNYKv8DCCsQABoMNjM3NDIzMTgzODA1Igw2N34tv0WZ1XjNLvUq3APeyoBiegk0cZikaQHCSRvkL6%2BWXAablAYm9fFvOXh%2BaYBMLdku5jle%2Bf0Eo3v3typkZfKcJS6yLcJcaVXY%2B3018oyjjZp8n1%2BptdyXilUz2Ak%2FbG5%2FYpFC%2Fw6vSSdzbfz8MxHRGtfBPvIh0ZgBJEKftg2WxcmQn6%2FRrmAD2zE9JEYz6gFIUJyJ71u0BTAJVxNauHcghIe6xB4gsa6b71H9zGaBiimE%2FtG6QZrxQMyIojjjBGyR3kUOPXDL%2BUS%2BdzZe%2B18ulZ9JinpAoLTMZzKKaG42FM%2Bz9tXb3t8XI7PBOu8EWaUbTmHxXxJtB82ybRajtm9OuLqQfX8DvnO2BDCSqNK8EHWqFjSMTQUqo0EzeXOk5ktVXoxK2kKYXYCdvt%2B0KUY1wcPexmh3%2FcSDrylx2FdbbMaWcQxCheBRxGMKKruOi1hYyqbD5%2B2SmhiCfntOVoYO%2Ba8kCS1Nisk%2BRPSLv6yP26LMmgM1e%2Frdx0s%2FaKodGQtBYfi1EHztuY8YgHP06q79Ky%2Bu8ylazEXz7z%2BrxSAjyzPt2egfMNHlfPQKan%2FsWX5OW9PzUD9G8wZ5Im9z%2BkGZWCbqIk5rYW%2FKBamijShCOeTFm4HfuYvwH2S%2Fi0fd0HR%2FJ0jRpQwgLjCwsby9BjqkAQ8qGAehp%2FSy74kEhVDc2sRSQaU5CScDsuYc%2FTlNNCUkvffrQ0EfEmoSWH8%2FjhbDQoq%2FyrTn5XlFiTVhZtH%2FdX8qOj9pmnwkt1TBJfqeBGdrUAuG7O%2FLiPGnfkVAmhvY%2ByAGemm5xnDjm2boGosLF5V4XZw%2FGUh9jptGm%2F%2F0deBTyrw7be2rPJF25SIT2zalymsW7b8uZmbmBjHzhO5n7AmOzcVL&X-Amz-Signature=8d33f4272273fe12a9a0c86ee16ac97aaee75f888db96cd589e51456654e6038&X-Amz-SignedHeaders=host&x-id=GetObject)

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
